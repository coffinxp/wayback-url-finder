

# Wayback URL Finder

A Chrome extension that helps you quickly discover archived URLs from the Wayback Machine. Perfect for bug bounty hunters, security researchers, and OSINT enthusiasts.

## Features

- Instant URL Lookup – Quickly fetch archived URLs from the Wayback Machine.  
- Four Search Modes:
  1. Main Domain URLs (`https://example.com/*`)
  2. Wildcard Domain URLs (`*.example.com/*`)
  3. Specific Path URLs (`https://example.com/path/*`)
  4. Sensitive File Extensions (`.pdf`, `.sql`, `.json`, `.env`, `.bak`, etc.)

## Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/coffinxp/wayback-url-finder.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top-right corner

4. Click "Load unpacked" and select the folder where you saved the project

5. The Wayback URL Finder icon should now appear in your Chrome toolbar

## Usage

1. Navigate to any webpage
2. Click the Wayback URL Finder icon in your Chrome toolbar
3. Choose one of the following options:
   - Main Domain URLs
   - Wildcard Domain URLs
   - Specific Path URLs
   - Sensitive File Extensions
4. The extension will open the corresponding Wayback Machine results in a new tab

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

## Screenshots

<img width="1672" height="941" alt="Web Archival   Reconnaissance Flow" src="https://github.com/user-attachments/assets/bae3a6fc-c3ac-45da-9216-6318b73bf70a" />

## Contributing

Pull requests are welcome! Feel free to suggest new features, UI improvements, or bug fixes via GitHub issues.

## Author

**Coffinxp** - Bug bounty hunter & security researcher
## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
