// Store all expenses for calculation
let expenses = [];
let currentUser = null;

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    currentUser = localStorage.getItem('currentUser');
    if (!currentUser) {
        // No user logged in, use guest mode
        currentUser = 'guest_user';
        localStorage.setItem('currentUser', currentUser);
    }
    
    // Display user name
    const users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[currentUser]) {
        document.getElementById('userName').textContent = users[currentUser].name;
    }
    
    // Load user's expenses from localStorage
    const savedExpenses = localStorage.getItem('expenses_' + currentUser);
    if (savedExpenses) {
        expenses = JSON.parse(savedExpenses);
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
    }
    
    // Display latest expenses
    displayLatestExpenses();
    
    // Update summary
    updateSummary();
    
    // Update limit display
    updateLimitDisplay();
    
    // Get form and table elements
    const form = document.querySelector('form');
    const tableBody = document.querySelector('tbody');
    
    // Handle form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        // Get form values
        const date = document.getElementById('date').value;
        const category = document.getElementById('category').value;
        const description = document.getElementById('description').value;
        const amount = parseFloat(document.getElementById('amount').value);
        const notes = document.getElementById('notes').value;
        
        // Validate inputs
        if (!date || !category || !description || !amount) {
            alert('Please fill in all required fields!');
            return;
        }
        
        // Create expense object
        const expense = {
            date: date,
            category: category,
            description: description,
            amount: amount,
            notes: notes
        };
        
        // Add to expenses array
        expenses.push(expense);
        
        // Sort expenses by date (newest first)
        expenses.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        // Save expenses to localStorage for current user
        localStorage.setItem('expenses_' + currentUser, JSON.stringify(expenses));
        
        // Display only latest 10 expenses in the table
        displayLatestExpenses();
        
        // Update summary statistics
        updateSummary();
        
        // Update limit display
        updateLimitDisplay();
        
        // Clear the form
        form.reset();
        
        // Set focus back to date field
        document.getElementById('date').focus();
    });
    
    // Set today's date as default and disable future dates
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').value = today;
    document.getElementById('date').max = today; // Disable future dates
});

// Function to get category emoji
function getCategoryEmoji(category) {
    const emojis = {
        'Food': '🍔',
        'Transport': '🚗',
        'Utilities': '💡',
        'Entertainment': '🎬',
        'Medical': '🏥',
        'Other': '📦'
    };
    return emojis[category] || '💰';
}

// Function to update summary statistics
function updateSummary() {
    const tableBody = document.querySelector('tbody');
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const count = expenses.length;
    const average = count > 0 ? totalAmount / count : 0;
    const highest = count > 0 ? Math.max(...expenses.map(e => e.amount)) : 0;
    
    // Get summary cards
    const summaryCards = document.querySelectorAll('.summary-card');
    
    // Update values in the summary card
    summaryCards[0].querySelector('.summary-value').textContent = '₹ ' + totalAmount.toFixed(2);
    summaryCards[1].querySelector('.summary-value').textContent = count;
    summaryCards[2].querySelector('.summary-value').textContent = '₹ ' + average.toFixed(2);
    summaryCards[3].querySelector('.summary-value').textContent = '₹ ' + highest.toFixed(2);
}

// Function to open details modal on the same page
function openDetailsModal() {
    // Get modal element
    const modal = document.getElementById('detailsModal');
    
    // Calculate summary
    const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);
    const count = expenses.length;
    const average = count > 0 ? totalAmount / count : 0;
    const highest = count > 0 ? Math.max(...expenses.map(e => e.amount)) : 0;
    
    // Update modal summary cards
    document.getElementById('modalTotalAmount').textContent = totalAmount.toFixed(2);
    document.getElementById('modalTotalCount').textContent = count;
    document.getElementById('modalAvgAmount').textContent = average.toFixed(2);
    document.getElementById('modalHighestAmount').textContent = highest.toFixed(2);
    
    // Populate modal table
    const modalTableBody = document.getElementById('modalTableBody');
    
    if (expenses.length === 0) {
        modalTableBody.innerHTML = '<tr class="empty-state"><td colspan="5">No expenses to display</td></tr>';
    } else {
        modalTableBody.innerHTML = expenses.map(expense => `
            <tr>
                <td>${expense.date}</td>
                <td><span class="category-badge category-${expense.category}">${getCategoryEmoji(expense.category)} ${expense.category}</span></td>
                <td>${expense.description}</td>
                <td>${expense.notes || '-'}</td>
                <td class="amount">₹ ${expense.amount.toFixed(2)}</td>
            </tr>
        `).join('');
    }
    
    // Show modal
    modal.classList.add('show');
}

// Function to close details modal
function closeDetailsModal() {
    const modal = document.getElementById('detailsModal');
    modal.classList.remove('show');
}

// Close modal when clicking outside of it
window.addEventListener('click', function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.classList.remove('show');
    }
});

// Function to open details page in the same tab
function openDetailsPage(event) {
    if (event) {
        event.preventDefault();
    }
    // Store expenses in localStorage to pass to the details page
    localStorage.setItem('expenseData', JSON.stringify(expenses));
    
    // Close dropdown if opened
    closeDropdown();
    
    // Navigate to details page in the same tab
    window.location.href = 'details.html';
}

// Function to logout user
function logout(event) {
    if (event) {
        event.preventDefault();
    }
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('currentUser');
        location.reload();
    }
}

// Function to toggle dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.toggle('show');
}

// Function to open profile (placeholder)
function openProfile(event) {
    event.preventDefault();
    alert('Profile feature coming soon!');
    closeDropdown();
}

// Function to close dropdown menu
function closeDropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');
    dropdownMenu.classList.remove('show');
}

// Close dropdown when clicking outside of it
document.addEventListener('click', function(event) {
    const dropdown = document.querySelector('.dropdown');
    const dropdownMenu = document.getElementById('dropdownMenu');
    
    if (dropdown && !dropdown.contains(event.target)) {
        dropdownMenu.classList.remove('show');
    }
});

// Function to get monthly limit
function getMonthlyLimit() {
    return parseFloat(localStorage.getItem('monthlyLimit_' + currentUser)) || 0;
}

// Function to toggle limit modal
function toggleLimitModal() {
    const modal = document.getElementById('limitModal');
    const currentLimit = getMonthlyLimit();
    if (currentLimit > 0) {
        document.getElementById('limitInput').value = currentLimit;
    }
    modal.style.display = 'block';
}

// Function to close limit modal
function closeLimitModal() {
    const modal = document.getElementById('limitModal');
    modal.style.display = 'none';
}

// Function to save monthly limit
function saveLimit() {
    const limitValue = parseFloat(document.getElementById('limitInput').value);
    
    if (!limitValue || limitValue <= 0) {
        alert('Please enter a valid limit amount!');
        return;
    }
    
    localStorage.setItem('monthlyLimit_' + currentUser, limitValue);
    updateLimitDisplay();
    closeLimitModal();
    alert('Monthly limit set to ₹' + limitValue.toFixed(2));
}

// Function to get current month's spending
function getCurrentMonthSpending() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = String(today.getMonth() + 1).padStart(2, '0');
    const currentMonthStr = currentYear + '-' + currentMonth;
    
    return expenses.reduce((sum, expense) => {
        if (expense.date.startsWith(currentMonthStr)) {
            return sum + expense.amount;
        }
        return sum;
    }, 0);
}

// Function to update limit display
function updateLimitDisplay() {
    const limit = getMonthlyLimit();
    const currentSpending = getCurrentMonthSpending();
    const percentage = limit > 0 ? (currentSpending / limit) * 100 : 0;
    
    document.getElementById('currentSpending').textContent = '₹ ' + currentSpending.toFixed(2);
    document.getElementById('limitDisplay').textContent = ' / ₹ ' + limit.toFixed(2);
    
    const progressBar = document.getElementById('progressBar');
    const clampedPercentage = Math.min(percentage, 100);
    progressBar.style.width = clampedPercentage + '%';
    
    const statusElement = document.getElementById('limitStatus');
    if (limit === 0) {
        statusElement.textContent = '⚠️ No limit set. Click "Set Limit" to add one.';
        statusElement.style.color = '#fff';
    } else if (currentSpending <= limit) {
        const remaining = limit - currentSpending;
        const percentageLeft = ((limit - currentSpending) / limit) * 100;
        statusElement.textContent = `✅ On track! ₹ ${remaining.toFixed(2)} remaining (${percentageLeft.toFixed(1)}%)`;
        statusElement.style.color = '#d4edda';
    } else {
        const exceeded = currentSpending - limit;
        statusElement.textContent = `⚠️ Limit exceeded by ₹ ${exceeded.toFixed(2)}`;
        statusElement.style.color = '#f8d7da';
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('limitModal');
    if (event.target === modal) {
        closeLimitModal();
    }
});



// Function to display latest 10 expenses
function displayLatestExpenses() {
    const tableBody = document.querySelector('tbody');
    
    // Show only the latest 10 expenses
    const latestExpenses = expenses.slice(0, 10);
    
    if (latestExpenses.length === 0) {
        tableBody.innerHTML = '<tr class="empty-state"><td colspan="5" class="empty-state">No expenses yet. Add one to get started!</td></tr>';
        return;
    }
    
    // Clear the table and add latest expenses
    tableBody.innerHTML = latestExpenses.map(expense => `
        <tr>
            <td>${expense.date}</td>
            <td><span class="category-badge category-${expense.category}">${getCategoryEmoji(expense.category)} ${expense.category}</span></td>
            <td>${expense.description}</td>
            <td>${expense.notes || '-'}</td>
            <td class="amount">₹ ${expense.amount.toFixed(2)}</td>
        </tr>
    `).join('');
}

// Function to apply filters
function applyFilters() {
    const startDate = document.getElementById('filterStartDate').value;
    const endDate = document.getElementById('filterEndDate').value;
    const category = document.getElementById('filterCategory').value;
    
    // Filter expenses based on criteria
    let filteredExpenses = expenses.filter(expense => {
        // Filter by date range
        if (startDate && expense.date < startDate) return false;
        if (endDate && expense.date > endDate) return false;
        
        // Filter by category
        if (category && expense.category !== category) return false;
        
        return true;
    });
    
    // Display filtered expenses (first 10)
    displayFilteredExpenses(filteredExpenses);
}

// Function to display filtered expenses
function displayFilteredExpenses(expensesToDisplay) {
    const tableBody = document.querySelector('tbody');
    
    // Get the latest 10 from filtered results
    const latestFiltered = expensesToDisplay.slice(0, 10);
    
    if (latestFiltered.length === 0) {
        tableBody.innerHTML = '<tr class="empty-state"><td colspan="5" class="empty-state">No expenses match the selected filters.</td></tr>';
        return;
    }
    
    // Clear the table and add filtered expenses
    tableBody.innerHTML = latestFiltered.map(expense => `
        <tr>
            <td>${expense.date}</td>
            <td><span class="category-badge category-${expense.category}">${getCategoryEmoji(expense.category)} ${expense.category}</span></td>
            <td>${expense.description}</td>
            <td>${expense.notes || '-'}</td>
            <td class="amount">₹ ${expense.amount.toFixed(2)}</td>
        </tr>
    `).join('');
}

// Function to reset filters
function resetFilters() {
    // Clear filter inputs
    document.getElementById('filterStartDate').value = '';
    document.getElementById('filterEndDate').value = '';
    document.getElementById('filterCategory').value = '';
    
    // Display all latest 10 expenses again
    displayLatestExpenses();
}
