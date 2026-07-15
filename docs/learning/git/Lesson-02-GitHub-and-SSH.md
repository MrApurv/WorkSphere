# Lesson 02 - GitHub and SSH

## Objective

Connect local Git with GitHub securely.

---

## HTTPS vs SSH

HTTPS

Uses username and password/token.

SSH

Uses encryption keys.

---

## SSH Key Generation

ssh-keygen -t ed25519 -C "your_email@example.com"

---

## Test Connection

ssh -T git@github.com

Expected Output

Hi username!
You've successfully authenticated.

---

## Change Remote URL

git remote set-url origin git@github.com:MrApurv/WorkSphere.git

---

## Check Remote

git remote -v

---

## My Learning

SSH is more secure than HTTPS.

No password required after setup.