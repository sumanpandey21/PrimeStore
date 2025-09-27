from rest_framework import serializers
from django.contrib.auth.models import User

class RegisterSerializer(serializers.ModelSerializer):
    
    password2 = serializers.CharField(write_only = True)
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['username', 'email', 'password', 'password2']
        extra_kwargs = {
            'password' : {"write_only": True}
        }

    def validate_email(self, value):
        if User.objects.filter(email = value).exists():
            raise serializers.ValidationError('An account with this email already exists.')
        return value

    def validate(self, data):
        if len(data['password'] ) <8 :
            raise serializers.ValidationError('Password must be at least 8 characters long.')

        if data['password'] != data['password2']:
            raise serializers.ValidationError("Password must match")
        
        return data
    
    def create(self, validated_data):
        user = User.objects.create_user(
        username=validated_data['username'],
        email=validated_data['email'],
        password=validated_data['password'],
    )
        user.is_active = False  
        user.save()
        return user
