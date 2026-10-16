

# Wayback URL Finder

A browser extension that helps you quickly discover archived URLs from the Wayback Machine. Perfect for bug bounty hunters, security researchers, and OSINT enthusiasts.

**Now supports both Chrome and Firefox!** 🎉

## ✨ Features

- **Cross-Browser Support** – Works on both Chrome and Firefox
- **Instant URL Lookup** – Quickly fetch archived URLs from the Wayback Machine  
- **Smart URL Detection** – Automatically detects the current tab's URL
- **Four Powerful Search Modes**:
  1. **Main Domain URLs** (`https://example.com/*`) - Find all archived pages for a domain
  2. **Wildcard Domain URLs** (`*.example.com/*`) - Include all subdomains
  3. **Specific Path URLs** (`https://example.com/path/*`) - Target specific paths
  4. **Sensitive File Extensions** - Hunt for `.pdf`, `.sql`, `.json`, `.env`, `.bak`, and 30+ other file types

## 🚀 Installation

### Chrome Installation

1. Download or clone this repository:
   ```bash
   git clone https://github.com/coffinxp/wayback-url-finder.git
   ```

2. Open Chrome and navigate to `chrome://extensions/`

3. Enable "Developer mode" in the top-right corner

4. Click "Load unpacked" and select the folder where you saved the project

5. The Wayback URL Finder icon should now appear in your Chrome toolbar

### Firefox Installation

1. Download or clone this repository (same as above)

2. Open Firefox and navigate to `about:debugging`

3. Click "This Firefox" on the left sidebar

4. Click "Load Temporary Add-on..."

5. Navigate to the project folder and select the `manifest.json` file

6. The Wayback URL Finder icon should now appear in your Firefox toolbar

**Note**: Firefox temporary add-ons are removed when the browser restarts.

## 📖 Usage

1. Navigate to any webpage
2. Click the Wayback URL Finder icon in your browser toolbar
3. The current page URL will be automatically detected and filled in
4. Choose one of the four search modes:
   - **Main Domain URLs** - Find all archived pages for the domain
   - **Wildcard Domain URLs** - Include all subdomains in the search
   - **Specific Path URLs** - Search for URLs under a specific path
   - **Sensitive File Extensions** - Hunt for potentially interesting files
5. The extension will open the corresponding Wayback Machine results in a new tab
6. Browse through the archived URLs to find valuable information

### 💡 Pro Tips
- You can manually edit the URL in the input field before searching
- The sensitive file extensions search looks for 30+ file types including:
  `xls`, `xml`, `xlsx`, `json`, `pdf`, `sql`, `doc`, `env`, `bak`, `zip`, `tar.gz`, `config`, `yml`, `git`, `db`, `backup`, and many more!

## 🔍 Example Queries

The extension generates these types of Wayback Machine queries:

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

## 🛠 Technical Details

### Browser Compatibility
- **Chrome**: Uses Manifest V3 with `chrome` API
- **Firefox**: Uses Manifest V2 with `browser` API and Promises

### Architecture
- **Manifest**: Cross-browser compatible configuration
- **Popup Interface**: Clean, modern UI with loading states and tooltips
- **Background Logic**: Efficient URL parsing and Wayback Machine query generation
- **Permissions**: Minimal required permissions (`activeTab`, `tabs`)

### File Structure
```
wayback-url-finder/
├── manifest.json       # Extension configuration
├── popup.html         # Main UI interface
├── popup.js           # Core functionality
├── icon.png           # Extension icon
├── images/            # UI assets
│   └── cursor-blue.cur
└── README.md          # This file
```

## 📸 Screenshots

<img width="366" height="521" alt="Screenshot 2025-10-19 091726" src="https://github.com/user-attachments/assets/646fe87c-8693-44a5-8c75-8012b77e0ae0" />

## 📝 Changelog

### Version 1.1 (Latest)
- ✨ **New**: Firefox support added
- 🔄 Updated to cross-browser compatible architecture
- 🐛 Fixed hardcoded Chrome extension URLs
- 📝 Enhanced documentation and installation guides
- 🎨 Improved UI consistency across browsers

### Version 1.0
- 🎆 Initial Chrome extension release
- 🔍 Four search modes for Wayback Machine
- 🎨 Modern, dark-themed UI
- ⚡ Instant URL detection from active tab

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Ideas for Contributions
- 📱 Mobile browser support (if feasible)
- 🎨 Additional themes or UI improvements
- 🔍 More search filters or options
- 🌍 Internationalization (i18n) support
- 📊 Analytics or usage statistics

## 📞 Support & Issues

If you encounter any issues:
1. Check the [Issues](https://github.com/coffinxp/wayback-url-finder/issues) page
2. Create a new issue with detailed information
3. Include your browser version and steps to reproduce

## 👥 Author

**Coffinxp** - Bug bounty hunter & security researcher  
[🔗 GitHub](https://github.com/coffinxp) | [🎥 YouTube](https://www.youtube.com/@lostsecc)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <strong>Made with ❤️ for the cybersecurity community</strong>
  <br>
  <em>Happy hunting! 🔍🎯</em>
</div>
