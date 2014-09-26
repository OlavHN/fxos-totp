# Timebased One Time Password (like google authenticator) for Firefox OS

## getting started

### Prereqs:
- git
- node (www.nodejs.org)
- browserify (`npm install -g browserify`)

### install and run
- Get code `git clone git://github.com:OlavHN/fxos-totp.git`
- `cd totp`
- Install dependencies `npm install`
- Generate javascript `browserify src/components/main.js -o www/bundle.js`
- Run development server `cd www && python -m SimpleHTTPServer`
- Go to http://localhost:8000
