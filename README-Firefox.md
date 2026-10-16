# Wayback URL Finder - Firefox Edition

A Firefox extension that helps you quickly discover archived URLs from the Wayback Machine. Perfect for bug bounty hunters, security researchers, and OSINT enthusiasts.

## Features

- Instant URL Lookup – Quickly fetch archived URLs from the Wayback Machine.  
- Four Search Modes:
  1. Main Domain URLs (`https://example.com/*`)
  2. Wildcard Domain URLs (`*.example.com/*`)
  3. Specific Path URLs (`https://example.com/path/*`)
  4. Sensitive File Extensions (`.pdf`, `.sql`, `.json`, `.env`, `.bak`, etc.)

## Installation

### Method 1: Developer Mode (Temporary)
1. Download or clone this repository:
   ```bash
   git clone https://github.com/coffinxp/wayback-url-finder.git
   ```

2. Open Firefox and navigate to `about:debugging`

3. Click "This Firefox" on the left sidebar

4. Click "Load Temporary Add-on..."

5. Navigate to the project folder and select the `manifest.json` file

6. The Wayback URL Finder icon should now appear in your Firefox toolbar

**Note**: Temporary add-ons are removed when Firefox restarts.

### Method 2: Permanent Installation (Advanced)
For permanent installation, you would need to:
1. Package the extension as a `.xpi` file
2. Sign it through Mozilla's Add-on Developer Hub
3. Install the signed `.xpi` file

## Usage

1. Navigate to any webpage
2. Click the Wayback URL Finder icon in your Firefox toolbar
3. Choose one of the following options:
   - Main Domain URLs
   - Wildcard Domain URLs
   - Specific Path URLs
   - Sensitive File Extensions
4. The extension will open the corresponding Wayback Machine results in a new tab

## Key Differences from Chrome Version

- Uses Manifest V2 (Firefox's current standard)
- Uses `browser` API instead of `chrome` API
- Uses `browser_action` instead of `action` in manifest
- Includes additional `tabs` permission for Firefox compatibility

## Example Queries

### Main Domain
```
https://web.archive.org/cdx/search/cdx?url=example.com/*&collapse=urlkey&output=text&fl=original
```

### Wildcard Domain
```
https://web.archive.org/cdx/search/cdx?url=*.example.com/*&collapse=urlkey&output=text&fl=original
```

### Specific Path
```
https://web.archive.org/cdx/search/cdx?url=https://example.com/path/*&collapse=urlkey&output=text&fl=original
```

### Sensitive File Extensions
```
https://web.archive.org/cdx/search/cdx?url=*.example.com/*&collapse=urlkey&output=text&fl=original&filter=original:.*\.(xls|xml|xlsx|json|pdf|sql|doc|docx|pptx|txt|zip|tar\.gz|tgz|bak|7z|rar|log|cache|secret|db|backup|yml|gz|git|config|csv|yaml|md|md5|exe|dll|bin|ini|bat|sh|tar|deb|rpm|iso|img|apk|msi|env|dmg|tmp|crt|pem|key|pub|asc)$
```

## Troubleshooting

- If the extension doesn't appear, make sure you selected the `manifest.json` file during installation
- If buttons don't work, check the browser console (F12) for any JavaScript errors
- Make sure Firefox allows the extension to access the current tab

## Contributing

Pull requests are welcome! Feel free to suggest new features, UI improvements, or bug fixes via GitHub issues.

## Author

**Coffinxp** - Bug bounty hunter & security researcher (Original Chrome version)
Converted to Firefox by Assistant

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.