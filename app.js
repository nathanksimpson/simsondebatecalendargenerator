// ============================================
// Data Storage
// ============================================
let appData = {
    classes: [],
    holidays: [],
    termStart: null
};

// Color palette for auto-assigning
const colorPalette = [
    '#e67e22', // Orange
    '#27ae60', // Green
    '#3498db', // Blue
    '#9b59b6', // Purple
    '#e74c3c', // Red
    '#1abc9c', // Teal
    '#f39c12', // Yellow
    '#34495e', // Dark Blue
    '#e91e63', // Pink
    '#00bcd4', // Cyan
    '#8bc34a', // Light Green
    '#ff5722'  // Deep Orange
];

let colorIndex = 0;

// ============================================
// DOM Elements
// ============================================
const elements = {
    termStart: document.getElementById('termStart'),
    calendarContainer: document.getElementById('calendarContainer'),
    
    // Class Modal
    classModal: document.getElementById('classModal'),
    classForm: document.getElementById('classForm'),
    classModalTitle: document.getElementById('classModalTitle'),
    classId: document.getElementById('classId'),
    className: document.getElementById('className'),
    classLevel: document.getElementById('classLevel'),
    classGrade: document.getElementById('classGrade'),
    classBook: document.getElementById('classBook'),
    classStartDate: document.getElementById('classStartDate'),
    classEndDate: document.getElementById('classEndDate'),
    classDayOfWeek: document.getElementById('classDayOfWeek'),
    classColor: document.getElementById('classColor'),
    customScheduleEnabled: document.getElementById('customScheduleEnabled'),
    customScheduleSection: document.getElementById('customScheduleSection'),
    customDay1: document.getElementById('customDay1'),
    customDay2: document.getElementById('customDay2'),
    customDay3: document.getElementById('customDay3'),
    customDay4: document.getElementById('customDay4'),
    compressDay12: document.getElementById('compressDay12'),
    compressDay34: document.getElementById('compressDay34'),
    deleteClassBtn: document.getElementById('deleteClassBtn'),
    
    // Holiday Modal
    holidayModal: document.getElementById('holidayModal'),
    holidayForm: document.getElementById('holidayForm'),
    holidayModalTitle: document.getElementById('holidayModalTitle'),
    holidayId: document.getElementById('holidayId'),
    holidayName: document.getElementById('holidayName'),
    holidayIsRange: document.getElementById('holidayIsRange'),
    holidaySingleDate: document.getElementById('holidaySingleDate'),
    holidayDate: document.getElementById('holidayDate'),
    holidayDateRange: document.getElementById('holidayDateRange'),
    holidayStartDate: document.getElementById('holidayStartDate'),
    holidayEndDate: document.getElementById('holidayEndDate'),
    holidayBgColor: document.getElementById('holidayBgColor'),
    holidayTextColor: document.getElementById('holidayTextColor'),
    holidayAllLevels: document.getElementById('holidayAllLevels'),
    holidayLevelCheckboxes: document.getElementById('holidayLevelCheckboxes'),
    deleteHolidayBtn: document.getElementById('deleteHolidayBtn'),
    
    // Print Modal
    printModal: document.getElementById('printModal'),
    printForm: document.getElementById('printForm'),
    
    // Popup
    classPopup: document.getElementById('classPopup'),
    
    // Print Summary
    printSummary: document.getElementById('printSummary'),
    classSummaryTable: document.getElementById('classSummaryTable'),
    holidaySummaryTable: document.getElementById('holidaySummaryTable'),
    lessonScheduleSummary: document.getElementById('lessonScheduleSummary'),
    compressionNotes: document.getElementById('compressionNotes')
};

// ============================================
// Initialization
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    loadData();
    initializeTermStart();
    setupEventListeners();
    renderCalendar();
});

function initializeTermStart() {
    // Set default to current month if not saved
    if (!appData.termStart) {
        const now = new Date();
        appData.termStart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
    elements.termStart.value = appData.termStart;
}

// ============================================
// Event Listeners Setup
// ============================================
function setupEventListeners() {
    // Term Start Change
    elements.termStart.addEventListener('change', (e) => {
        appData.termStart = e.target.value;
        saveData();
        renderCalendar();
    });
    
    // Button Clicks
    document.getElementById('addClassBtn').addEventListener('click', () => openClassModal());
    document.getElementById('addHolidayBtn').addEventListener('click', () => openHolidayModal());
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile').addEventListener('change', importData);
    document.getElementById('clearAllBtn').addEventListener('click', clearAllData);
    document.getElementById('printBtn').addEventListener('click', () => openModal(elements.printModal));
    
    // Modal Close Buttons
    document.getElementById('closeClassModal').addEventListener('click', () => closeModal(elements.classModal));
    document.getElementById('closeHolidayModal').addEventListener('click', () => closeModal(elements.holidayModal));
    document.getElementById('closePrintModal').addEventListener('click', () => closeModal(elements.printModal));
    
    // Form Submissions
    elements.classForm.addEventListener('submit', handleClassSubmit);
    elements.holidayForm.addEventListener('submit', handleHolidaySubmit);
    elements.printForm.addEventListener('submit', handlePrint);
    
    // Delete Buttons
    elements.deleteClassBtn.addEventListener('click', deleteClass);
    elements.deleteHolidayBtn.addEventListener('click', deleteHoliday);
    
    // Holiday "All Levels" toggle
    elements.holidayAllLevels.addEventListener('change', (e) => {
        elements.holidayLevelCheckboxes.style.display = e.target.checked ? 'none' : 'grid';
    });
    
    // Holiday "Date Range" toggle
    elements.holidayIsRange.addEventListener('change', (e) => {
        const isRange = e.target.checked;
        elements.holidaySingleDate.style.display = isRange ? 'none' : 'block';
        elements.holidayDateRange.style.display = isRange ? 'grid' : 'none';
    });
    
    // Custom Schedule toggle
    elements.customScheduleEnabled.addEventListener('change', (e) => {
        elements.customScheduleSection.style.display = e.target.checked ? 'block' : 'none';
        // Toggle day of week requirement
        elements.classDayOfWeek.required = !e.target.checked;
    });
    
    // Close modals on outside click
    [elements.classModal, elements.holidayModal, elements.printModal].forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal(modal);
        });
    });
    
    // Close modals on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal(elements.classModal);
            closeModal(elements.holidayModal);
            closeModal(elements.printModal);
        }
    });
    
    // Popup handling
    document.addEventListener('mousemove', handlePopupPosition);
}

// ============================================
// Modal Functions
// ============================================
function openModal(modal) {
    modal.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
}

function openClassModal(classData = null) {
    if (classData) {
        // Edit mode
        elements.classModalTitle.textContent = 'Edit Class';
        elements.classId.value = classData.id;
        elements.className.value = classData.name;
        elements.classLevel.value = classData.level;
        elements.classGrade.value = classData.grade;
        elements.classBook.value = classData.book;
        elements.classStartDate.value = classData.startDate;
        elements.classEndDate.value = classData.endDate;
        elements.classDayOfWeek.value = classData.dayOfWeek || '';
        elements.classColor.value = classData.color;
        
        // Handle custom schedule
        const hasCustom = classData.customSchedule && classData.customSchedule.enabled;
        elements.customScheduleEnabled.checked = hasCustom;
        elements.customScheduleSection.style.display = hasCustom ? 'block' : 'none';
        elements.classDayOfWeek.required = !hasCustom;
        
        if (hasCustom) {
            elements.customDay1.value = classData.customSchedule.day1 || '';
            elements.customDay2.value = classData.customSchedule.day2 || '';
            elements.customDay3.value = classData.customSchedule.day3 || '';
            elements.customDay4.value = classData.customSchedule.day4 || '';
            elements.compressDay12.checked = classData.customSchedule.compressDay12 || false;
            elements.compressDay34.checked = classData.customSchedule.compressDay34 || false;
        } else {
            elements.customDay1.value = '';
            elements.customDay2.value = '';
            elements.customDay3.value = '';
            elements.customDay4.value = '';
            elements.compressDay12.checked = false;
            elements.compressDay34.checked = false;
        }
        
        elements.deleteClassBtn.style.display = 'block';
    } else {
        // Add mode
        elements.classModalTitle.textContent = 'Add New Class';
        elements.classForm.reset();
        elements.classId.value = '';
        elements.classColor.value = getNextColor();
        elements.customScheduleEnabled.checked = false;
        elements.customScheduleSection.style.display = 'none';
        elements.classDayOfWeek.required = true;
        elements.deleteClassBtn.style.display = 'none';
    }
    openModal(elements.classModal);
}

function openHolidayModal(holidayData = null) {
    // Reset all level checkboxes
    const levelCheckboxes = document.querySelectorAll('input[name="holidayLevel"]');
    levelCheckboxes.forEach(cb => cb.checked = false);
    
    if (holidayData) {
        // Edit mode
        elements.holidayModalTitle.textContent = 'Edit Holiday';
        elements.holidayId.value = holidayData.id;
        elements.holidayName.value = holidayData.name;
        
        // Handle date range
        const isRange = holidayData.isRange || false;
        elements.holidayIsRange.checked = isRange;
        elements.holidaySingleDate.style.display = isRange ? 'none' : 'block';
        elements.holidayDateRange.style.display = isRange ? 'grid' : 'none';
        
        if (isRange) {
            elements.holidayStartDate.value = holidayData.startDate || '';
            elements.holidayEndDate.value = holidayData.endDate || '';
            elements.holidayDate.value = '';
        } else {
            elements.holidayDate.value = holidayData.date || '';
            elements.holidayStartDate.value = '';
            elements.holidayEndDate.value = '';
        }
        
        // Handle colors
        elements.holidayBgColor.value = holidayData.bgColor || '#fef3c7';
        elements.holidayTextColor.value = holidayData.textColor || '#b45309';
        
        // Handle levels
        const isAllLevels = !holidayData.levels || holidayData.levels.length === 0;
        elements.holidayAllLevels.checked = isAllLevels;
        elements.holidayLevelCheckboxes.style.display = isAllLevels ? 'none' : 'grid';
        
        if (!isAllLevels) {
            levelCheckboxes.forEach(cb => {
                cb.checked = holidayData.levels.includes(cb.value);
            });
        }
        
        elements.deleteHolidayBtn.style.display = 'block';
    } else {
        // Add mode
        elements.holidayModalTitle.textContent = 'Add Holiday';
        elements.holidayForm.reset();
        elements.holidayId.value = '';
        elements.holidayIsRange.checked = false;
        elements.holidaySingleDate.style.display = 'block';
        elements.holidayDateRange.style.display = 'none';
        elements.holidayBgColor.value = '#fef3c7';
        elements.holidayTextColor.value = '#b45309';
        elements.holidayAllLevels.checked = true;
        elements.holidayLevelCheckboxes.style.display = 'none';
        elements.deleteHolidayBtn.style.display = 'none';
    }
    openModal(elements.holidayModal);
}

// ============================================
// Color Management
// ============================================
function getNextColor() {
    const color = colorPalette[colorIndex % colorPalette.length];
    colorIndex++;
    return color;
}

// ============================================
// Class Management
// ============================================
function handleClassSubmit(e) {
    e.preventDefault();
    
    const isCustomSchedule = elements.customScheduleEnabled.checked;
    
    const classData = {
        id: elements.classId.value || generateId(),
        name: elements.className.value,
        level: elements.classLevel.value,
        grade: elements.classGrade.value,
        book: elements.classBook.value,
        startDate: elements.classStartDate.value,
        endDate: elements.classEndDate.value,
        dayOfWeek: isCustomSchedule ? null : parseInt(elements.classDayOfWeek.value),
        color: elements.classColor.value,
        customSchedule: isCustomSchedule ? {
            enabled: true,
            day1: elements.customDay1.value || null,
            day2: elements.customDay2.value || null,
            day3: elements.customDay3.value || null,
            day4: elements.customDay4.value || null,
            compressDay12: elements.compressDay12.checked,
            compressDay34: elements.compressDay34.checked
        } : null
    };
    
    if (elements.classId.value) {
        // Update existing
        const index = appData.classes.findIndex(c => c.id === classData.id);
        if (index !== -1) {
            appData.classes[index] = classData;
        }
    } else {
        // Add new
        appData.classes.push(classData);
    }
    
    saveData();
    renderCalendar();
    closeModal(elements.classModal);
}

function deleteClass() {
    const id = elements.classId.value;
    if (id && confirm('Are you sure you want to delete this class?')) {
        appData.classes = appData.classes.filter(c => c.id !== id);
        saveData();
        renderCalendar();
        closeModal(elements.classModal);
    }
}

// ============================================
// Holiday Management
// ============================================
function handleHolidaySubmit(e) {
    e.preventDefault();
    
    // Get selected levels
    let levels = [];
    if (!elements.holidayAllLevels.checked) {
        const levelCheckboxes = document.querySelectorAll('input[name="holidayLevel"]:checked');
        levels = Array.from(levelCheckboxes).map(cb => cb.value);
    }
    
    const isRange = elements.holidayIsRange.checked;
    
    const holidayData = {
        id: elements.holidayId.value || generateId(),
        name: elements.holidayName.value,
        isRange: isRange,
        date: isRange ? null : elements.holidayDate.value,
        startDate: isRange ? elements.holidayStartDate.value : null,
        endDate: isRange ? elements.holidayEndDate.value : null,
        bgColor: elements.holidayBgColor.value,
        textColor: elements.holidayTextColor.value,
        levels: levels // Empty array means "all levels"
    };
    
    if (elements.holidayId.value) {
        // Update existing
        const index = appData.holidays.findIndex(h => h.id === holidayData.id);
        if (index !== -1) {
            appData.holidays[index] = holidayData;
        }
    } else {
        // Add new
        appData.holidays.push(holidayData);
    }
    
    saveData();
    renderCalendar();
    closeModal(elements.holidayModal);
}

function deleteHoliday() {
    const id = elements.holidayId.value;
    if (id && confirm('Are you sure you want to delete this holiday?')) {
        appData.holidays = appData.holidays.filter(h => h.id !== id);
        saveData();
        renderCalendar();
        closeModal(elements.holidayModal);
    }
}

// ============================================
// Smart Scheduling Logic
// ============================================
function calculateLessonDates(classData) {
    // Check if using custom schedule
    if (classData.customSchedule && classData.customSchedule.enabled) {
        return calculateCustomLessonDates(classData);
    }
    
    return calculateAutoLessonDates(classData);
}

function calculateCustomLessonDates(classData) {
    const custom = classData.customSchedule;
    const lessons = [];
    let compressed = false;
    
    if (custom.compressDay12 && custom.day1) {
        // Combine Day 1+2
        lessons.push({ date: new Date(custom.day1), label: 'Day 1+2', compressed: true });
        compressed = true;
    } else {
        if (custom.day1) {
            lessons.push({ date: new Date(custom.day1), label: 'Day 1', compressed: false });
        }
        if (custom.day2) {
            lessons.push({ date: new Date(custom.day2), label: 'Day 2', compressed: false });
        }
    }
    
    if (custom.compressDay34 && custom.day3) {
        // Combine Day 3+4
        lessons.push({ date: new Date(custom.day3), label: 'Day 3+4', compressed: true });
        compressed = true;
    } else {
        if (custom.day3) {
            lessons.push({ date: new Date(custom.day3), label: 'Day 3', compressed: false });
        }
        if (custom.day4) {
            lessons.push({ date: new Date(custom.day4), label: 'Day 4', compressed: false });
        }
    }
    
    return {
        lessons,
        compressed,
        availableCount: lessons.length,
        isCustom: true
    };
}

function calculateAutoLessonDates(classData) {
    const startDate = new Date(classData.startDate);
    const endDate = new Date(classData.endDate);
    const dayOfWeek = classData.dayOfWeek;
    
    // Get all dates for the specified day of week within the range
    const allDates = [];
    const current = new Date(startDate);
    
    // Move to first occurrence of the day of week
    while (current.getDay() !== dayOfWeek) {
        current.setDate(current.getDate() + 1);
    }
    
    // Collect all matching dates
    while (current <= endDate) {
        allDates.push(new Date(current));
        current.setDate(current.getDate() + 7);
    }
    
    // Filter out holidays that apply to this class level
    const availableDates = allDates.filter(date => {
        const dateStr = formatDateISO(date);
        return !isHolidayForClass(dateStr, classData.level);
    });
    
    // Apply compression logic
    const lessons = [];
    const availableCount = availableDates.length;
    
    if (availableCount >= 4) {
        // Normal: Day 1, Day 2, Day 3, Day 4
        lessons.push({ date: availableDates[0], label: 'Day 1', compressed: false });
        lessons.push({ date: availableDates[1], label: 'Day 2', compressed: false });
        lessons.push({ date: availableDates[2], label: 'Day 3', compressed: false });
        lessons.push({ date: availableDates[3], label: 'Day 4', compressed: false });
    } else if (availableCount === 3) {
        // Compress Day 3+4
        lessons.push({ date: availableDates[0], label: 'Day 1', compressed: false });
        lessons.push({ date: availableDates[1], label: 'Day 2', compressed: false });
        lessons.push({ date: availableDates[2], label: 'Day 3+4', compressed: true });
    } else if (availableCount === 2) {
        // Compress Day 1+2 and Day 3+4
        lessons.push({ date: availableDates[0], label: 'Day 1+2', compressed: true });
        lessons.push({ date: availableDates[1], label: 'Day 3+4', compressed: true });
    } else if (availableCount === 1) {
        // All compressed into one day
        lessons.push({ date: availableDates[0], label: 'Day 1-4', compressed: true });
    }
    
    return {
        lessons,
        compressed: availableCount < 4,
        availableCount,
        isCustom: false
    };
}

// Check if a date is a holiday for a specific class level
function isHolidayForClass(dateStr, classLevel) {
    const holiday = getHolidayForDate(dateStr);
    if (!holiday) return false;
    
    // If holiday has no levels specified, it applies to all
    if (!holiday.levels || holiday.levels.length === 0) {
        return true;
    }
    
    // Check if the class level is in the holiday's level list
    return holiday.levels.includes(classLevel);
}

// Get holiday that covers a specific date (handles both single dates and ranges)
function getHolidayForDate(dateStr) {
    const checkDate = new Date(dateStr);
    
    for (const holiday of appData.holidays) {
        if (holiday.isRange) {
            // Check if date falls within range
            const start = new Date(holiday.startDate);
            const end = new Date(holiday.endDate);
            if (checkDate >= start && checkDate <= end) {
                return holiday;
            }
        } else {
            // Check single date
            if (holiday.date === dateStr) {
                return holiday;
            }
        }
    }
    
    return null;
}

// Get all dates covered by a holiday (for display purposes)
function getHolidayDates(holiday) {
    const dates = [];
    
    if (holiday.isRange) {
        const current = new Date(holiday.startDate);
        const end = new Date(holiday.endDate);
        
        while (current <= end) {
            dates.push(formatDateISO(current));
            current.setDate(current.getDate() + 1);
        }
    } else {
        dates.push(holiday.date);
    }
    
    return dates;
}

// ============================================
// Calendar Rendering
// ============================================
function renderCalendar() {
    if (!appData.termStart) return;
    
    const [year, month] = appData.termStart.split('-').map(Number);
    const startDate = new Date(year, month - 1, 1);
    
    // Clear container
    elements.calendarContainer.innerHTML = '';
    
    // Render 3 months
    for (let i = 0; i < 3; i++) {
        const monthDate = new Date(startDate);
        monthDate.setMonth(monthDate.getMonth() + i);
        renderMonth(monthDate);
    }
    
    // Update print summary
    updatePrintSummary();
}

function renderMonth(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
                        'July', 'August', 'September', 'October', 'November', 'December'];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    // Create month container
    const monthDiv = document.createElement('div');
    monthDiv.className = 'month-calendar';
    
    // Month header
    const headerDiv = document.createElement('div');
    headerDiv.className = 'month-header';
    headerDiv.innerHTML = `<h2>${monthNames[month]} ${year}</h2>`;
    monthDiv.appendChild(headerDiv);
    
    // Calendar grid
    const gridDiv = document.createElement('div');
    gridDiv.className = 'calendar-grid';
    
    // Day headers
    dayNames.forEach(day => {
        const dayHeader = document.createElement('div');
        dayHeader.className = 'calendar-day-header';
        dayHeader.textContent = day;
        gridDiv.appendChild(dayHeader);
    });
    
    // Get first day of month and total days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevMonthDays = new Date(year, month, 0).getDate();
    
    // Calculate scheduled lessons for all classes
    const scheduledLessons = {};
    appData.classes.forEach(classData => {
        const { lessons } = calculateLessonDates(classData);
        lessons.forEach(lesson => {
            const dateStr = formatDateISO(lesson.date);
            if (!scheduledLessons[dateStr]) {
                scheduledLessons[dateStr] = [];
            }
            scheduledLessons[dateStr].push({
                classData,
                lesson
            });
        });
    });
    
    // Create holiday lookup (including all dates in ranges)
    const holidayLookup = {};
    appData.holidays.forEach(h => {
        const dates = getHolidayDates(h);
        dates.forEach(dateStr => {
            holidayLookup[dateStr] = h;
        });
    });
    
    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
        const dayDiv = createDayCell(prevMonthDays - i, true);
        gridDiv.appendChild(dayDiv);
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const holiday = holidayLookup[dateStr];
        const events = scheduledLessons[dateStr] || [];
        
        const dayDiv = createDayCell(day, false, holiday, events, dateStr);
        gridDiv.appendChild(dayDiv);
    }
    
    // Next month days (fill to complete last row)
    const totalCells = firstDay + daysInMonth;
    const remainingCells = (7 - (totalCells % 7)) % 7;
    for (let i = 1; i <= remainingCells; i++) {
        const dayDiv = createDayCell(i, true);
        gridDiv.appendChild(dayDiv);
    }
    
    monthDiv.appendChild(gridDiv);
    elements.calendarContainer.appendChild(monthDiv);
}

function createDayCell(dayNumber, isOtherMonth, holiday = null, events = [], dateStr = '') {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'calendar-day';
    
    if (isOtherMonth) {
        dayDiv.classList.add('other-month');
    }
    
    if (holiday) {
        dayDiv.classList.add('holiday');
        // Apply custom colors
        dayDiv.style.backgroundColor = holiday.bgColor || '#fef3c7';
        // Make holiday clickable to edit
        dayDiv.addEventListener('click', (e) => {
            if (e.target === dayDiv || e.target.classList.contains('day-number') || e.target.classList.contains('holiday-name')) {
                openHolidayModal(holiday);
            }
        });
    }
    
    // Day number
    const numberDiv = document.createElement('div');
    numberDiv.className = 'day-number';
    numberDiv.textContent = dayNumber;
    dayDiv.appendChild(numberDiv);
    
    // Holiday name
    if (holiday) {
        const holidayDiv = document.createElement('div');
        holidayDiv.className = 'holiday-name';
        holidayDiv.style.color = holiday.textColor || '#b45309';
        const levelText = (holiday.levels && holiday.levels.length > 0) 
            ? ` (${holiday.levels.join(', ')})` 
            : '';
        holidayDiv.textContent = holiday.name + levelText;
        dayDiv.appendChild(holidayDiv);
    }
    
    // Events
    if (events.length > 0) {
        const eventsDiv = document.createElement('div');
        eventsDiv.className = 'day-events';
        
        events.forEach(({ classData, lesson }) => {
            const eventBar = document.createElement('div');
            eventBar.className = 'event-bar';
            eventBar.style.backgroundColor = classData.color;
            eventBar.innerHTML = `
                <span class="event-title">${classData.name} - ${lesson.label}</span>
                <span class="event-book">${classData.book}</span>
            `;
            
            // Store data for popup
            eventBar.dataset.classId = classData.id;
            eventBar.dataset.className = classData.name;
            eventBar.dataset.classLevel = classData.level;
            eventBar.dataset.classGrade = classData.grade;
            eventBar.dataset.classBook = classData.book;
            eventBar.dataset.lessonLabel = lesson.label;
            
            // Click to edit class
            eventBar.addEventListener('click', (e) => {
                e.stopPropagation();
                openClassModal(classData);
            });
            
            // Hover for popup
            eventBar.addEventListener('mouseenter', showPopup);
            eventBar.addEventListener('mouseleave', hidePopup);
            
            eventsDiv.appendChild(eventBar);
        });
        
        dayDiv.appendChild(eventsDiv);
    }
    
    return dayDiv;
}

// ============================================
// Popup Functions
// ============================================
function showPopup(e) {
    const bar = e.target;
    const popup = elements.classPopup;
    
    popup.querySelector('.popup-title').textContent = bar.dataset.className;
    popup.querySelector('.popup-level').textContent = bar.dataset.classLevel;
    popup.querySelector('.popup-grade').textContent = bar.dataset.classGrade;
    popup.querySelector('.popup-book').textContent = bar.dataset.classBook;
    popup.querySelector('.popup-lesson').textContent = bar.dataset.lessonLabel;
    
    popup.classList.add('active');
}

function hidePopup() {
    elements.classPopup.classList.remove('active');
}

function handlePopupPosition(e) {
    const popup = elements.classPopup;
    if (popup.classList.contains('active')) {
        const x = e.clientX + 15;
        const y = e.clientY + 15;
        
        // Keep popup in viewport
        const rect = popup.getBoundingClientRect();
        const maxX = window.innerWidth - rect.width - 20;
        const maxY = window.innerHeight - rect.height - 20;
        
        popup.style.left = Math.min(x, maxX) + 'px';
        popup.style.top = Math.min(y, maxY) + 'px';
    }
}

// ============================================
// Print Functions
// ============================================
function handlePrint(e) {
    e.preventDefault();
    
    const printCalendar = document.getElementById('printCalendar').checked;
    const printSummaryCheck = document.getElementById('printSummaryCheck').checked;
    const printClassList = document.getElementById('printClassList').checked;
    const printHolidayList = document.getElementById('printHolidayList').checked;
    const printLessonSchedule = document.getElementById('printLessonSchedule').checked;
    const printCompressionNotes = document.getElementById('printCompressionNotes').checked;
    
    // Set body classes for print
    document.body.classList.toggle('hide-calendar-print', !printCalendar);
    document.body.classList.toggle('hide-summary-print', !printSummaryCheck);
    
    // Set summary section visibility
    const summary = elements.printSummary;
    summary.classList.toggle('hide-classes', !printClassList);
    summary.classList.toggle('hide-holidays', !printHolidayList);
    summary.classList.toggle('hide-schedule', !printLessonSchedule);
    summary.classList.toggle('hide-compression', !printCompressionNotes);
    
    closeModal(elements.printModal);
    
    // Trigger print
    setTimeout(() => {
        window.print();
        
        // Reset classes after print
        document.body.classList.remove('hide-calendar-print', 'hide-summary-print');
    }, 100);
}

function updatePrintSummary() {
    // Update Class Summary Table
    const classTableBody = elements.classSummaryTable.querySelector('tbody');
    classTableBody.innerHTML = '';
    
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    appData.classes.forEach(classData => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${classData.name}</td>
            <td>${classData.level}</td>
            <td>${classData.grade}</td>
            <td>${classData.book}</td>
            <td>${formatDateDisplay(classData.startDate)}</td>
            <td>${formatDateDisplay(classData.endDate)}</td>
            <td>${dayNames[classData.dayOfWeek]}</td>
        `;
        classTableBody.appendChild(row);
    });
    
    // Update Holiday Summary Table
    const holidayTableBody = elements.holidaySummaryTable.querySelector('tbody');
    holidayTableBody.innerHTML = '';
    
    // Sort holidays by their first date
    const sortedHolidays = [...appData.holidays].sort((a, b) => {
        const dateA = new Date(a.isRange ? a.startDate : a.date);
        const dateB = new Date(b.isRange ? b.startDate : b.date);
        return dateA - dateB;
    });
    
    sortedHolidays.forEach(holiday => {
        const appliesToText = (!holiday.levels || holiday.levels.length === 0) 
            ? 'All Levels' 
            : holiday.levels.join(', ');
        
        let dateText;
        if (holiday.isRange) {
            dateText = `${formatDateDisplay(holiday.startDate)} - ${formatDateDisplay(holiday.endDate)}`;
        } else {
            dateText = formatDateDisplay(holiday.date);
        }
        
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${holiday.name}</td>
            <td>${dateText}</td>
            <td>${appliesToText}</td>
        `;
        holidayTableBody.appendChild(row);
    });
    
    // Update Lesson Schedule Summary
    elements.lessonScheduleSummary.innerHTML = '';
    
    appData.classes.forEach(classData => {
        const { lessons } = calculateLessonDates(classData);
        
        const itemDiv = document.createElement('div');
        itemDiv.className = 'lesson-schedule-item';
        itemDiv.style.borderLeftColor = classData.color;
        
        let lessonsHtml = lessons.map(l => 
            `<li>${l.label}: ${formatDateDisplay(formatDateISO(l.date))}</li>`
        ).join('');
        
        itemDiv.innerHTML = `
            <h4>${classData.name} (${classData.level})</h4>
            <ul>${lessonsHtml}</ul>
        `;
        
        elements.lessonScheduleSummary.appendChild(itemDiv);
    });
    
    // Update Compression Notes
    elements.compressionNotes.innerHTML = '';
    
    appData.classes.forEach(classData => {
        const { compressed, availableCount, lessons, isCustom } = calculateLessonDates(classData);
        
        if (compressed) {
            const li = document.createElement('li');
            const compressedDays = lessons.filter(l => l.compressed).map(l => l.label).join(', ');
            const scheduleType = isCustom ? ' (custom schedule)' : ` (${availableCount} available dates)`;
            li.textContent = `${classData.name}: ${compressedDays} compressed${scheduleType}`;
            elements.compressionNotes.appendChild(li);
        }
    });
    
    // Show message if no compressions
    if (elements.compressionNotes.children.length === 0) {
        const li = document.createElement('li');
        li.textContent = 'No classes have compressed days.';
        li.style.background = '#d1fae5';
        li.style.borderLeftColor = '#10b981';
        elements.compressionNotes.appendChild(li);
    }
}

// ============================================
// Data Persistence
// ============================================
function saveData() {
    localStorage.setItem('classCalendarData', JSON.stringify(appData));
}

function loadData() {
    const saved = localStorage.getItem('classCalendarData');
    if (saved) {
        try {
            appData = JSON.parse(saved);
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

function exportData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `class-calendar-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

function importData(e) {
    const file = e.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (event) => {
        try {
            const imported = JSON.parse(event.target.result);
            
            // Validate structure
            if (imported.classes && imported.holidays) {
                appData = imported;
                saveData();
                
                // Update term start input
                if (appData.termStart) {
                    elements.termStart.value = appData.termStart;
                }
                
                renderCalendar();
                alert('Data imported successfully!');
            } else {
                alert('Invalid file format. Please select a valid calendar export file.');
            }
        } catch (err) {
            alert('Error reading file. Please select a valid JSON file.');
            console.error('Import error:', err);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = '';
}

function clearAllData() {
    // Show confirmation dialog
    const confirmed = confirm(
        'Are you sure you want to clear ALL data?\n\n' +
        'This will delete:\n' +
        '- All classes\n' +
        '- All holidays\n' +
        '- Term start date\n\n' +
        'This action cannot be undone!'
    );
    
    if (!confirmed) {
        return;
    }
    
    // Reset appData to initial state
    appData = {
        classes: [],
        holidays: [],
        termStart: null
    };
    
    // Reset color index
    colorIndex = 0;
    
    // Clear localStorage
    localStorage.removeItem('classCalendarData');
    
    // Re-initialize term start (will set to current month)
    initializeTermStart();
    
    // Re-render calendar
    renderCalendar();
    
    // Show success message
    alert('All data has been cleared successfully!');
}

// ============================================
// Utility Functions
// ============================================
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function formatDateISO(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function formatDateDisplay(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

