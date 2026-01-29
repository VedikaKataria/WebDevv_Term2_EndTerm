# 💰 Stacks - Expense Tracker

A modern, responsive web-based expense tracking application with a stunning dark blue glassmorphism UI. Manage your daily expenses with ease. Built with vanilla JavaScript, HTML, and CSS, featuring comprehensive expense analytics and guest mode access.

## 🌟 Features

### Core Functionality
- **Add Expenses**: Quickly add new expenses with date, category, description, amount, and notes
- **Track Expenses**: View all your expenses in an organized table format
- **Summary Cards**: Display key metrics including:
  - Total expenses
  - Number of expenses
  - Average expense amount
  - Highest expense
  
### Advanced Features
- **Monthly Expense Limit**: Set and monitor a monthly budget limit with visual progress bar
- **Transaction Details Page**: View comprehensive expense analytics including:
  - Monthly breakdown of expenses
  - Expense filtering by category and date range
  - Monthly spending reports
  
- **Multiple Categories**: Organize expenses into predefined categories:
  - 🍔 Food & Dining
  - 🚗 Transport
  - 💡 Utilities
  - 🎬 Entertainment
  - 🏥 Medical
  - 📦 Other

### User Management
- **Guest Mode**: Access the application instantly without authentication
- **Local Storage**: Expense history stored locally in browser (per device)
- **User Menu**: Quick access to transaction details and navigation

### UI/UX
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Dark Blue Glassmorphism**: Modern design with dark blue gradient background, transparent glassmorphic cards with backdrop blur effects, and smooth transparency
- **Color Palette**: Professional dark blue (#020617, #0F1E32, #0F1732) with indigo (#4F46E5) and magenta (#C026D3) accents
- **Visual Effects**: Animated background orbs, glowing shadows on hover, smooth transitions and animations
- **Enhanced UX**: Filter & search expenses by category and date range with intuitive controls
- **Interactive Elements**: Gradient buttons with hover effects, transparent inputs with blur effects

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Styling**: Glassmorphism design with CSS backdrop-filter and transparency effects
- **Data Storage**: Browser LocalStorage (no backend required)
- **Icons**: Emoji-based icons for better UX
- **Responsive**: CSS Media Queries for mobile-first design
- **Visual Effects**: CSS animations, gradient overlays, and blur effects

## 📁 File Structure

```
Term2_EndTerm/
├── index.html              # Main application interface
├── details.html            # Transaction details and analytics page
├── style.css               # Main stylesheet with dark blue glassmorphism theme
├── script.js               # Main application logic
├── README.md               # This file
└── GOOGLE_SETUP_GUIDE.md  # Guest mode setup guide
```

### File Descriptions

#### index.html
- Main dashboard with expense form
- Summary cards displaying key metrics
- Expense table showing latest 10 expenses
- Monthly expense limit section
- User menu with dropdown navigation
- Guest mode access without authentication

#### details.html
- Comprehensive expense analytics page
- Monthly spending breakdown
- Transaction filter section
- Category-wise expense summary
- Monthly reports with detailed statistics
- Print functionality for reports

#### style.css
- Main stylesheet (668 lines)
- Responsive grid layouts
- Color theme implementation
- Button and form styling
- Table and card styling
- Modal dialogs
- Media queries for mobile responsiveness

#### script.js
- Expense CRUD operations (Create, Read, Update, Delete)
- LocalStorage data management
- Summary calculations and statistics
- Monthly limit tracking and progress visualization
- Form validation
- DOM manipulation and event handling
- Category emoji mapping
- Category emoji mapping
- Filter and search functionality
- Guest mode initialization and management

#### style.css
- Main stylesheet with dark blue glassmorphism theme (773 lines)
- Responsive grid layouts and flexbox designs
- Dark blue color scheme with indigo and magenta accents
- Backdrop blur effects and transparency styling
- Animated background orbs with float animation
- Button and form styling with hover effects
- Table and card styling with glass-effect appearance
- Modal dialogs with dark theme
- Media queries for mobile, tablet, and desktop responsiveness
- Focus states with glow effects

## 🚀 Getting Started

### Installation

1. **Navigate to Project Directory**
   ```bash
   cd Term2_EndTerm
   ```

2. **Open the Application**
   - Option A: Open `index.html` directly in your web browser
   - Option B: Use a local development server
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     ```
   - Navigate to `http://localhost:8000` in your browser

## 📖 Usage Guide

### Getting Started
The application opens directly to the main dashboard in guest mode. All features are available without requiring authentication.

### Adding an Expense
1. Fill in the "Add New Expense" form:
   - **Date**: Select the date of the expense
   - **Category**: Choose from Food, Transport, Utilities, Entertainment, Medical, or Other
   - **Description**: Brief description of the expense
   - **Amount**: Enter the expense amount
   - **Notes** (Optional): Add additional details
2. Click "➕ Add Expense" to save
3. Click "🔄 Clear Form" to reset the form

### Setting a Monthly Limit
1. Click "⚙️ Set Limit" in the Monthly Expense Limit section
2. Enter your desired limit amount
3. Click "Save Limit"
4. Your spending progress will be displayed with a visual progress bar
   - Green: 0-50% of limit
   - Yellow: 50-80% of limit
   - Red: 80%+ of limit

### Viewing Transaction Details
1. Click "📊 Transaction Details" from the user menu
2. View comprehensive expense analytics:
   - Summary cards with key metrics
   - Expense filter section
   - Monthly breakdown of expenses
   - Detailed transaction table
3. Use filters to narrow down expenses by:
   - Date range (from and to dates)
   - Category
4. Click "🖨️ Print" to print the report

### Viewing Profile
1. Click "👤 Profile" from the user menu
2. View your account information

### Logout
1. Click "🚪 Logout" from the user menu
2. You'll be redirected to the authentication page

## 🎨 Color Palette

The application uses a professional color scheme:

| Color | Hex Code | Usage |
|-------|----------|-------|
| Light Teal | `#78B9B5` | Secondary elements, backgrounds |
| Primary Teal | `#0F828C` | Primary buttons, headers |
| Dark Blue | `#065084` | Hover states, dark accents |
| Deep Purple | `#320A6B` | Background gradient endpoint |
| Light Beige | `#f5ede3` | Input backgrounds, hover states |

## 📊 Data Storage

All data is stored in the browser's LocalStorage:

- **users**: User account information (name, email, picture)
- **expenses_[userId]**: User's expense records
- **currentUser**: Currently logged-in user ID
- **monthlyLimit_[userId]**: User's monthly expense limit

⚠️ **Note**: LocalStorage is browser-specific and device-specific. Data will be lost if:
- Browser cache is cleared
- Private/Incognito mode is used (data is cleared on session end)
- Browser storage is manually cleared
- Different browser or device is used

## 🔒 Authentication Details

### Guest Mode
- Application runs in guest mode with no authentication required
- All data is stored locally in the browser's LocalStorage
- User data is stored with a default guest user identifier
- No account creation or login needed to start tracking expenses

### Data Storage
- All expense data is stored exclusively in browser LocalStorage
- No data is transmitted to any external servers
- Data persists across browser sessions but is device-specific

### Security Considerations
- Data is stored locally and is never sent to external servers
- For multi-device synchronization, implement a backend database
- Browser storage can be accessed by anyone with device access
- Clearing browser data will delete all stored expenses

## 📱 Responsive Design

The application is fully responsive with breakpoints at:
- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

Mobile optimizations include:
- Touch-friendly buttons and form inputs
- Optimized layouts for smaller screens
- Readable font sizes
- Single-column layouts for better mobile experience

## 🔧 Customization

### Modifying Colors
1. Open `style.css`
2. Update the main color values:
   - **Dark Blue**: `rgba(2, 10, 30, 0.95)`, `rgba(20, 35, 60, 0.6)`
   - **Indigo**: `rgba(79, 70, 229, ...)` (#4F46E5)
   - **Magenta**: `rgba(192, 38, 211, ...)` (#C026D3)
   - **Text Colors**: `#ffffff`, `#c5d9f1`, `#e0e7ff`
3. Replace with your preferred colors while maintaining the glassmorphism effect
4. Ensure good contrast for readability on dark backgrounds

### Adding New Expense Categories
1. Open `index.html` and add option to the category select element
2. Open `script.js` and add the category to the `getCategoryEmoji()` function
3. Open `details.html` and add a category badge style in the CSS
4. Open `style.css` and add `.category-[CategoryName]` styling

### Changing the Currency
1. Search for "₹" in `index.html`, `details.html`, and `script.js`
2. Replace with your desired currency symbol
3. Ensure the currency is consistent across all files

## 🐛 Troubleshooting

### Expenses Not Saving
- **Issue**: Expenses disappear after page refresh
- **Solution**: Check if LocalStorage is enabled in your browser settings
- **Note**: Private/Incognito browsing clears data on session end

### Styling Issues
- **Issue**: Colors or layouts appear incorrect
- **Solution**: Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete) and refresh the page

## 📈 Future Enhancements

Potential features for future versions:
- Backend database integration for persistent data storage
- Multiple device synchronization
- Export to CSV/PDF functionality
- Budget recommendations based on spending patterns
- Recurring expense templates
- Receipt image upload
- Multi-currency support
- Dark mode theme
- Advanced charts and visualizations
- Mobile app versions (React Native/Flutter)

## 📝 License

This project is created for educational purposes.

## 👨‍💻 Development Notes

- **Framework**: Vanilla JavaScript (No external dependencies except Google OAuth)
- **Browser Compatibility**: Chrome, Firefox, Safari, Edge (latest versions)
- **Tested On**: 
  - Desktop browsers (1920x1080, 1366x768)
  - Tablet (iPad, Android tablets)
  - Mobile (iPhone 12+, Android devices)

## 🤝 Contributing

To improve this project:
1. Test thoroughly on different browsers and devices
2. Maintain responsive design principles
3. Follow the existing code style
4. Keep the color palette consistent
5. Add comments for complex logic

## 📞 Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review the browser console for error messages (F12)
3. Ensure all files are in the correct directory
4. Verify Google OAuth configuration

## 🎯 Key Features Highlight

✅ **No Backend Required**: Works entirely in the browser  
✅ **Secure OAuth**: Google authentication for safety  
✅ **Responsive**: Works on all devices  
✅ **User-Friendly**: Intuitive interface with emojis  
✅ **Data Visualization**: Charts and progress indicators  
✅ **Budget Tracking**: Monthly limit monitoring  
✅ **Detailed Analytics**: Comprehensive transaction reports  
✅ **Fast & Lightweight**: No external dependencies  

---

**Version**: 1.0  
**Last Updated**: January 2026  
**Status**: Production Ready  
**Application Name**: Stacks
