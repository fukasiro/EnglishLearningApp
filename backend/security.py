import base64
import hashlib
import hmac
import secrets


def hash_password(password: str, salt: bytes | None = None) -> tuple[str, str]:
    if salt is None:
        salt = secrets.token_bytes(16)
    password_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        200_000,
    )
    return base64.b64encode(password_hash).decode("utf-8"), base64.b64encode(salt).decode("utf-8")


def verify_password(password: str, password_hash: str, password_salt: str) -> bool:
    salt = base64.b64decode(password_salt)
    expected_hash = hashlib.pbkdf2_hmac(
        "sha256",
        password.encode("utf-8"),
        salt,
        200_000,
    )
    return hmac.compare_digest(base64.b64encode(expected_hash).decode("utf-8"), password_hash)


def generate_verification_code() -> str:
    return secrets.token_urlsafe(16)
