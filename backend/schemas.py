from pydantic import BaseModel, EmailStr
from typing import Optional


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class SignUpRequest(BaseModel):
    name: Optional[str] = None
    email: EmailStr
    password: str


class VerifySignupRequest(BaseModel):
    email: EmailStr
    code: str
