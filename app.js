// ============================================
// Internationalization (i18n)
// ============================================
let currentLanguage = 'en';

const translations = {
    en: {
        // Header
        appTitle: 'Class Calendar Planner',
        addClass: '+ Add Class',
        addHoliday: '+ Add Holiday',
        export: 'Export',
        import: 'Import',
        print: 'Print',
        langToggle: '🌐 한국어',
        
        // Term Selector
        calendarName: 'Calendar Name:',
        calendarNamePlaceholder: 'e.g., Fall 2025 Term',
        termStartMonth: 'Term Start Month:',
        
        // Class Modal
        addNewClass: 'Add New Class',
        editClass: 'Edit Class',
        className: 'Class Name',
        classNamePlaceholder: 'e.g., Debate',
        classLevel: 'Class Level',
        selectLevel: 'Select Level',
        grade: 'Grade',
        selectGrade: 'Select Grade',
        book: 'Book',
        bookPlaceholder: 'e.g., Debate 2025 Fall Nov. A',
        notes: 'Notes',
        notesPlaceholder: 'Optional notes about this class...',
        startDate: 'Start Date',
        endDate: 'End Date',
        dayOfWeek: 'Day of Week',
        selectDay: 'Select Day',
        sunday: 'Sunday',
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        color: 'Color',
        customSchedule: 'Custom Schedule (manually pick dates for each lesson)',
        selectDatesHint: 'Select specific dates for each lesson day:',
        day1: 'Day 1',
        day2: 'Day 2',
        day3: 'Day 3',
        day4: 'Day 4',
        compressionHint: 'Compression options (leave date empty to combine):',
        combineDay12: "Combine Day 1+2 on Day 1's date",
        combineDay34: "Combine Day 3+4 on Day 3's date",
        delete: 'Delete',
        saveClass: 'Save Class',
        
        // Holiday Modal
        addHolidayTitle: 'Add Holiday',
        editHoliday: 'Edit Holiday',
        holidayName: 'Holiday/Event Name',
        holidayNamePlaceholder: 'e.g., Thanksgiving',
        dateRange: 'Date Range (multiple days)',
        date: 'Date',
        bgColor: 'Background Color',
        textColor: 'Text Color',
        appliesTo: 'Applies To',
        allClasses: 'All Classes',
        byGrade: 'By Grade:',
        byClassName: 'By Class Name:',
        saveHoliday: 'Save Holiday',
        
        // Popup
        level: 'Level:',
        lesson: 'Lesson:',
        
        // Print Modal
        printOptions: 'Print Options',
        printCalendar: 'Print Calendar',
        printSummaryPage: 'Print Summary Page',
        includeClassList: 'Include Class List',
        includeHolidayList: 'Include Holiday List',
        includeLessonSchedule: 'Include Lesson Schedule',
        includeCompressionNotes: 'Include Compression Notes',
        
        // Print Summary
        termSummary: 'Term Summary',
        classes: 'Classes',
        holidays: 'Holidays',
        lessonSchedule: 'Lesson Schedule',
        compressionNotes: 'Compression Notes',
        day: 'Day',
        
        // Calendar
        monthNames: ['January', 'February', 'March', 'April', 'May', 'June',
                     'July', 'August', 'September', 'October', 'November', 'December'],
        dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        dayNamesFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        
        // Autocomplete
        selectToAutofill: 'Select to auto-fill fields:',
        
        // Messages
        allClassesLabel: 'All Classes',
        gradesLabel: 'Grades',
        classesLabel: 'Classes',
        noClassesYet: 'No classes created yet',
        noCompressedDays: 'No classes have compressed days.',
        confirmDeleteClass: 'Are you sure you want to delete this class?',
        confirmDeleteHoliday: 'Are you sure you want to delete this holiday?',
        importSuccess: 'Data imported successfully!',
        invalidFile: 'Invalid file format. Please select a valid calendar export file.',
        errorReadingFile: 'Error reading file. Please select a valid JSON file.',
        migrationNotice: 'Data migrated to new format:\n- {classes} class(es) updated\n- {holidays} holiday(s) updated\n\nPlease review and update Class Levels (A/B/C) for migrated classes.'
    },
    ko: {
        // Header
        appTitle: '수업 캘린더 플래너',
        addClass: '+ 수업 추가',
        addHoliday: '+ 휴일 추가',
        export: '내보내기',
        import: '가져오기',
        print: '인쇄',
        langToggle: '🌐 English',
        
        // Term Selector
        calendarName: '캘린더 이름:',
        calendarNamePlaceholder: '예: 2025 가을 학기',
        termStartMonth: '학기 시작 월:',
        
        // Class Modal
        addNewClass: '새 수업 추가',
        editClass: '수업 편집',
        className: '수업 이름',
        classNamePlaceholder: '예: 토론',
        classLevel: '반',
        selectLevel: '반 선택',
        grade: '학년',
        selectGrade: '학년 선택',
        book: '교재',
        bookPlaceholder: '예: 토론 2025 가을 11월 A',
        notes: '메모',
        notesPlaceholder: '이 수업에 대한 메모...',
        startDate: '시작일',
        endDate: '종료일',
        dayOfWeek: '요일',
        selectDay: '요일 선택',
        sunday: '일요일',
        monday: '월요일',
        tuesday: '화요일',
        wednesday: '수요일',
        thursday: '목요일',
        friday: '금요일',
        saturday: '토요일',
        color: '색상',
        customSchedule: '사용자 지정 일정 (각 수업 날짜 직접 선택)',
        selectDatesHint: '각 수업일의 특정 날짜를 선택하세요:',
        day1: '1일차',
        day2: '2일차',
        day3: '3일차',
        day4: '4일차',
        compressionHint: '압축 옵션 (날짜를 비워두면 합치기):',
        combineDay12: '1+2일차를 1일차 날짜에 합치기',
        combineDay34: '3+4일차를 3일차 날짜에 합치기',
        delete: '삭제',
        saveClass: '수업 저장',
        
        // Holiday Modal
        addHolidayTitle: '휴일 추가',
        editHoliday: '휴일 편집',
        holidayName: '휴일/이벤트 이름',
        holidayNamePlaceholder: '예: 추석',
        dateRange: '기간 (여러 날)',
        date: '날짜',
        bgColor: '배경색',
        textColor: '글자색',
        appliesTo: '적용 대상',
        allClasses: '모든 수업',
        byGrade: '학년별:',
        byClassName: '수업별:',
        saveHoliday: '휴일 저장',
        
        // Popup
        level: '반:',
        lesson: '수업:',
        
        // Print Modal
        printOptions: '인쇄 옵션',
        printCalendar: '캘린더 인쇄',
        printSummaryPage: '요약 페이지 인쇄',
        includeClassList: '수업 목록 포함',
        includeHolidayList: '휴일 목록 포함',
        includeLessonSchedule: '수업 일정 포함',
        includeCompressionNotes: '압축 노트 포함',
        
        // Print Summary
        termSummary: '학기 요약',
        classes: '수업',
        holidays: '휴일',
        lessonSchedule: '수업 일정',
        compressionNotes: '압축 노트',
        day: '요일',
        
        // Calendar
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월',
                     '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesFull: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
        
        // Autocomplete
        selectToAutofill: '선택하여 자동 입력:',
        
        // Messages
        allClassesLabel: '모든 수업',
        gradesLabel: '학년',
        classesLabel: '수업',
        noClassesYet: '아직 수업이 없습니다',
        noCompressedDays: '압축된 수업이 없습니다.',
        confirmDeleteClass: '이 수업을 삭제하시겠습니까?',
        confirmDeleteHoliday: '이 휴일을 삭제하시겠습니까?',
        importSuccess: '데이터를 성공적으로 가져왔습니다!',
        invalidFile: '잘못된 파일 형식입니다. 유효한 캘린더 내보내기 파일을 선택하세요.',
        errorReadingFile: '파일을 읽는 중 오류가 발생했습니다. 유효한 JSON 파일을 선택하세요.',
        migrationNotice: '데이터가 새 형식으로 마이그레이션되었습니다:\n- {classes}개의 수업 업데이트\n- {holidays}개의 휴일 업데이트\n\n마이그레이션된 수업의 반(A/B/C)을 확인하고 업데이트하세요.'
    }
};

function t(key) {
    return translations[currentLanguage][key] || translations['en'][key] || key;
}

function applyLanguage() {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLanguage][key]) {
            el.textContent = translations[currentLanguage][key];
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLanguage][key]) {
            el.placeholder = translations[currentLanguage][key];
        }
    });
    
    // Update language toggle button text
    const langBtn = document.getElementById('langToggleBtn');
    if (langBtn) {
        langBtn.textContent = t('langToggle');
    }
    
    // Update calendar title with name
    updateCalendarTitle();
    
    // Re-render calendar to update month/day names
    if (appData.termStart) {
        renderCalendar();
    }
}

function updateCalendarTitle() {
    const titleEl = document.querySelector('.app-header h1');
    if (titleEl) {
        if (appData.calendarName && appData.calendarName.trim()) {
            titleEl.textContent = appData.calendarName;
        } else {
            titleEl.textContent = t('appTitle');
        }
    }
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'ko' : 'en';
    localStorage.setItem('calendarLanguage', currentLanguage);
    applyLanguage();
}

function loadLanguage() {
    const saved = localStorage.getItem('calendarLanguage');
    if (saved && (saved === 'en' || saved === 'ko')) {
        currentLanguage = saved;
    }
}

// ============================================
// Data Storage
// ============================================
let appData = {
    classes: [],
    holidays: [],
    termStart: null,
    calendarName: ''
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
    calendarName: document.getElementById('calendarName'),
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
    classNotes: document.getElementById('classNotes'),
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
    holidayAllClasses: document.getElementById('holidayAllClasses'),
    holidayFilterSection: document.getElementById('holidayFilterSection'),
    holidayClassCheckboxes: document.getElementById('holidayClassCheckboxes'),
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
    loadLanguage();
    loadData();
    initializeTermStart();
    setupEventListeners();
    applyLanguage();
    renderCalendar();
});

function initializeTermStart() {
    // Set default to current month if not saved
    if (!appData.termStart) {
        const now = new Date();
        appData.termStart = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    }
    elements.termStart.value = appData.termStart;
    
    // Load calendar name
    elements.calendarName.value = appData.calendarName || '';
}

// ============================================
// Event Listeners Setup
// ============================================
function setupEventListeners() {
    // Calendar Name Change
    elements.calendarName.addEventListener('input', (e) => {
        appData.calendarName = e.target.value;
        saveData();
        updateCalendarTitle();
    });
    
    // Term Start Change
    elements.termStart.addEventListener('change', (e) => {
        appData.termStart = e.target.value;
        saveData();
        renderCalendar();
    });
    
    // Language Toggle
    document.getElementById('langToggleBtn').addEventListener('click', toggleLanguage);
    
    // Button Clicks
    document.getElementById('addClassBtn').addEventListener('click', () => openClassModal());
    document.getElementById('addHolidayBtn').addEventListener('click', () => openHolidayModal());
    document.getElementById('exportBtn').addEventListener('click', exportData);
    document.getElementById('importBtn').addEventListener('click', () => document.getElementById('importFile').click());
    document.getElementById('importFile').addEventListener('change', importData);
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
    
    // Holiday "All Classes" toggle
    elements.holidayAllClasses.addEventListener('change', (e) => {
        elements.holidayFilterSection.style.display = e.target.checked ? 'none' : 'block';
    });
    
    // Class Name autocomplete feature
    elements.className.addEventListener('input', debounce(showClassNameSuggestions, 300));
    elements.className.addEventListener('focus', showClassNameSuggestions);
    elements.className.addEventListener('blur', () => {
        // Delay hiding to allow click on suggestion
        setTimeout(hideClassNameSuggestions, 200);
    });
    
    // Handle keyboard navigation in autocomplete
    elements.className.addEventListener('keydown', handleAutocompleteKeydown);
    
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
        elements.classModalTitle.textContent = t('editClass');
        elements.classId.value = classData.id;
        elements.className.value = classData.name;
        elements.classLevel.value = classData.level;
        elements.classGrade.value = classData.grade;
        elements.classBook.value = classData.book;
        elements.classNotes.value = classData.notes || '';
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
        elements.classModalTitle.textContent = t('addNewClass');
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
    // Populate class name checkboxes dynamically
    populateHolidayClassCheckboxes();
    
    // Reset all grade checkboxes
    const gradeCheckboxes = document.querySelectorAll('input[name="holidayGrade"]');
    gradeCheckboxes.forEach(cb => cb.checked = false);
    
    // Reset all class checkboxes
    const classCheckboxes = document.querySelectorAll('input[name="holidayClass"]');
    classCheckboxes.forEach(cb => cb.checked = false);
    
    if (holidayData) {
        // Edit mode
        elements.holidayModalTitle.textContent = t('editHoliday');
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
        
        // Handle grades and class names
        const hasGrades = holidayData.grades && holidayData.grades.length > 0;
        const hasClassNames = holidayData.classNames && holidayData.classNames.length > 0;
        const isAllClasses = !hasGrades && !hasClassNames;
        
        elements.holidayAllClasses.checked = isAllClasses;
        elements.holidayFilterSection.style.display = isAllClasses ? 'none' : 'block';
        
        if (hasGrades) {
            gradeCheckboxes.forEach(cb => {
                cb.checked = holidayData.grades.includes(cb.value);
            });
        }
        
        if (hasClassNames) {
            const classCheckboxes = document.querySelectorAll('input[name="holidayClass"]');
            classCheckboxes.forEach(cb => {
                cb.checked = holidayData.classNames.includes(cb.value);
            });
        }
        
        elements.deleteHolidayBtn.style.display = 'block';
    } else {
        // Add mode
        elements.holidayModalTitle.textContent = t('addHolidayTitle');
        elements.holidayForm.reset();
        elements.holidayId.value = '';
        elements.holidayIsRange.checked = false;
        elements.holidaySingleDate.style.display = 'block';
        elements.holidayDateRange.style.display = 'none';
        elements.holidayBgColor.value = '#fef3c7';
        elements.holidayTextColor.value = '#b45309';
        elements.holidayAllClasses.checked = true;
        elements.holidayFilterSection.style.display = 'none';
        elements.deleteHolidayBtn.style.display = 'none';
    }
    openModal(elements.holidayModal);
}

// Populate class name checkboxes for holiday modal
function populateHolidayClassCheckboxes() {
    const container = elements.holidayClassCheckboxes;
    container.innerHTML = '';
    
    // Get unique class names
    const classNames = [...new Set(appData.classes.map(c => c.name))];
    
    classNames.forEach(name => {
        const label = document.createElement('label');
        label.className = 'checkbox-label';
        label.innerHTML = `
            <input type="checkbox" name="holidayClass" value="${name}">
            ${name}
        `;
        container.appendChild(label);
    });
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
// Autocomplete / Auto-Populate Feature
// ============================================
let selectedSuggestionIndex = -1;

function showClassNameSuggestions() {
    const dropdown = document.getElementById('classNameSuggestions');
    const inputValue = elements.className.value.trim().toLowerCase();
    
    // Only show suggestions when adding a new class (not editing)
    if (elements.classId.value) {
        hideClassNameSuggestions();
        return;
    }
    
    // Get unique class names that match the input
    const uniqueClasses = [];
    const seenNames = new Set();
    
    appData.classes.forEach(c => {
        const nameLower = c.name.toLowerCase();
        if (!seenNames.has(nameLower) && (inputValue === '' || nameLower.includes(inputValue))) {
            seenNames.add(nameLower);
            uniqueClasses.push(c);
        }
    });
    
    // Don't show if no matches or input is empty and no classes exist
    if (uniqueClasses.length === 0) {
        hideClassNameSuggestions();
        return;
    }
    
    // Build dropdown HTML
    let html = `<div class="autocomplete-hint" data-i18n="selectToAutofill">${t('selectToAutofill') || 'Select to auto-fill fields:'}</div>`;
    
    uniqueClasses.forEach((classData, index) => {
        const displayName = highlightMatch(classData.name, inputValue);
        const details = `${classData.level || '-'} | ${classData.grade || '-'} | ${classData.book || '-'}`;
        html += `
            <div class="autocomplete-item" data-index="${index}" data-class-id="${classData.id}">
                <div class="item-name">${displayName}</div>
                <div class="item-details">${details}</div>
            </div>
        `;
    });
    
    dropdown.innerHTML = html;
    dropdown.classList.add('active');
    selectedSuggestionIndex = -1;
    
    // Add click handlers to suggestions
    dropdown.querySelectorAll('.autocomplete-item').forEach(item => {
        item.addEventListener('mousedown', (e) => {
            e.preventDefault(); // Prevent blur from firing first
            const classId = item.dataset.classId;
            selectClassSuggestion(classId);
        });
    });
}

function hideClassNameSuggestions() {
    const dropdown = document.getElementById('classNameSuggestions');
    dropdown.classList.remove('active');
    selectedSuggestionIndex = -1;
}

function highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<span class="item-match">$1</span>');
}

function selectClassSuggestion(classId) {
    const existingClass = appData.classes.find(c => c.id === classId);
    
    if (existingClass) {
        // Fill the class name
        elements.className.value = existingClass.name;
        
        // Auto-fill other fields (except dates)
        elements.classLevel.value = existingClass.level || '';
        elements.classGrade.value = existingClass.grade || '';
        elements.classBook.value = existingClass.book || '';
        elements.classNotes.value = existingClass.notes || '';
        elements.classDayOfWeek.value = existingClass.dayOfWeek !== null ? existingClass.dayOfWeek : '';
        elements.classColor.value = existingClass.color || getNextColor();
    }
    
    hideClassNameSuggestions();
}

function handleAutocompleteKeydown(e) {
    const dropdown = document.getElementById('classNameSuggestions');
    if (!dropdown.classList.contains('active')) return;
    
    const items = dropdown.querySelectorAll('.autocomplete-item');
    if (items.length === 0) return;
    
    switch (e.key) {
        case 'ArrowDown':
            e.preventDefault();
            selectedSuggestionIndex = Math.min(selectedSuggestionIndex + 1, items.length - 1);
            updateSelectedSuggestion(items);
            break;
        case 'ArrowUp':
            e.preventDefault();
            selectedSuggestionIndex = Math.max(selectedSuggestionIndex - 1, -1);
            updateSelectedSuggestion(items);
            break;
        case 'Enter':
            if (selectedSuggestionIndex >= 0) {
                e.preventDefault();
                const classId = items[selectedSuggestionIndex].dataset.classId;
                selectClassSuggestion(classId);
            }
            break;
        case 'Escape':
            hideClassNameSuggestions();
            break;
    }
}

function updateSelectedSuggestion(items) {
    items.forEach((item, index) => {
        item.classList.toggle('selected', index === selectedSuggestionIndex);
    });
    
    // Scroll selected item into view
    if (selectedSuggestionIndex >= 0) {
        items[selectedSuggestionIndex].scrollIntoView({ block: 'nearest' });
    }
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
        notes: elements.classNotes.value,
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
    if (id && confirm(t('confirmDeleteClass'))) {
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
    
    // Get selected grades and class names
    let grades = [];
    let classNames = [];
    
    if (!elements.holidayAllClasses.checked) {
        const gradeCheckboxes = document.querySelectorAll('input[name="holidayGrade"]:checked');
        grades = Array.from(gradeCheckboxes).map(cb => cb.value);
        
        const classCheckboxes = document.querySelectorAll('input[name="holidayClass"]:checked');
        classNames = Array.from(classCheckboxes).map(cb => cb.value);
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
        grades: grades,      // Empty array means "all"
        classNames: classNames // Empty array means "all"
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
    if (id && confirm(t('confirmDeleteHoliday'))) {
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
    
    // Filter out holidays that apply to this class
    const availableDates = allDates.filter(date => {
        const dateStr = formatDateISO(date);
        return !isHolidayForClass(dateStr, classData);
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

// Check if a date is a holiday for a specific class
function isHolidayForClass(dateStr, classData) {
    const holiday = getHolidayForDate(dateStr);
    if (!holiday) return false;
    
    // If holiday has no grades and no classNames specified, it applies to all
    const hasGrades = holiday.grades && holiday.grades.length > 0;
    const hasClassNames = holiday.classNames && holiday.classNames.length > 0;
    
    if (!hasGrades && !hasClassNames) {
        return true;
    }
    
    // Check if the class grade is in the holiday's grade list
    if (hasGrades && holiday.grades.includes(classData.grade)) {
        return true;
    }
    
    // Check if the class name is in the holiday's class name list
    if (hasClassNames && holiday.classNames.includes(classData.name)) {
        return true;
    }
    
    return false;
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
    
    const monthNames = t('monthNames');
    const dayNames = t('dayNamesShort');
    
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
        
        // Build applies-to text
        let appliesText = '';
        const hasGrades = holiday.grades && holiday.grades.length > 0;
        const hasClassNames = holiday.classNames && holiday.classNames.length > 0;
        
        if (hasGrades || hasClassNames) {
            const parts = [];
            if (hasGrades) parts.push(holiday.grades.join(', '));
            if (hasClassNames) parts.push(holiday.classNames.join(', '));
            appliesText = ` (${parts.join('; ')})`;
        }
        
        holidayDiv.textContent = holiday.name + appliesText;
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
    
    const dayNames = t('dayNamesFull');
    
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
        const hasGrades = holiday.grades && holiday.grades.length > 0;
        const hasClassNames = holiday.classNames && holiday.classNames.length > 0;
        
        let appliesToText = t('allClassesLabel');
        if (hasGrades || hasClassNames) {
            const parts = [];
            if (hasGrades) parts.push(`${t('gradesLabel')}: ${holiday.grades.join(', ')}`);
            if (hasClassNames) parts.push(`${t('classesLabel')}: ${holiday.classNames.join(', ')}`);
            appliesToText = parts.join('; ');
        }
        
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
        li.textContent = t('noCompressedDays');
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
            // Migrate old data format if needed
            const migrated = migrateData(appData);
            if (migrated) {
                saveData(); // Save migrated data
            }
        } catch (e) {
            console.error('Error loading saved data:', e);
        }
    }
}

// ============================================
// Data Migration
// ============================================
const OLD_LEVEL_TO_GRADE_MAP = {
    '1st-year': '중1',
    '2nd-year': '중2',
    '3rd-year': '중3',
    '4th-year': '',
    'Beginner': '',
    'Intermediate': '',
    'Advanced': ''
};

function migrateData(data) {
    let migrated = false;
    let migratedClasses = 0;
    let migratedHolidays = 0;
    
    // Migrate classes
    if (data.classes && data.classes.length > 0) {
        data.classes.forEach(classData => {
            // Check if this is old format (level has old values like "1st-year")
            if (classData.level && OLD_LEVEL_TO_GRADE_MAP.hasOwnProperty(classData.level)) {
                // Map old level to new grade
                const newGrade = OLD_LEVEL_TO_GRADE_MAP[classData.level];
                classData.grade = newGrade;
                classData.level = ''; // Clear level for user to re-select A/B/C
                migrated = true;
                migratedClasses++;
            }
        });
    }
    
    // Migrate holidays
    if (data.holidays && data.holidays.length > 0) {
        data.holidays.forEach(holiday => {
            // Check if this is old format (has 'levels' instead of 'grades')
            if (holiday.levels && !holiday.grades) {
                // Convert old levels to new grades
                const newGrades = [];
                holiday.levels.forEach(level => {
                    if (OLD_LEVEL_TO_GRADE_MAP.hasOwnProperty(level)) {
                        const grade = OLD_LEVEL_TO_GRADE_MAP[level];
                        if (grade && !newGrades.includes(grade)) {
                            newGrades.push(grade);
                        }
                    }
                });
                
                holiday.grades = newGrades;
                holiday.classNames = holiday.classNames || [];
                delete holiday.levels; // Remove old format
                migrated = true;
                migratedHolidays++;
            }
            
            // Ensure new format fields exist
            if (!holiday.grades) holiday.grades = [];
            if (!holiday.classNames) holiday.classNames = [];
        });
    }
    
    // Show migration notice
    if (migrated) {
        const msg = t('migrationNotice')
            .replace('{classes}', migratedClasses)
            .replace('{holidays}', migratedHolidays);
        setTimeout(() => alert(msg), 500);
    }
    
    return migrated;
}

function exportData() {
    const dataStr = JSON.stringify(appData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    // Generate filename with calendar name and date/time
    const now = new Date();
    const dateStr = now.toISOString().split('T')[0];
    const timeStr = now.toTimeString().split(' ')[0].replace(/:/g, '-');
    const baseName = appData.calendarName && appData.calendarName.trim() 
        ? appData.calendarName.trim().replace(/[^a-zA-Z0-9가-힣\s-]/g, '').replace(/\s+/g, '-')
        : 'class-calendar';
    const filename = `${baseName}_${dateStr}_${timeStr}.json`;
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
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
                
                // Migrate old data format if needed
                const migrated = migrateData(appData);
                
                saveData();
                
                // Update term start input
                if (appData.termStart) {
                    elements.termStart.value = appData.termStart;
                }
                
                renderCalendar();
                
                if (!migrated) {
                    alert(t('importSuccess'));
                }
                // If migrated, the migration function already shows an alert
            } else {
                alert(t('invalidFile'));
            }
        } catch (err) {
            alert(t('errorReadingFile'));
            console.error('Import error:', err);
        }
    };
    reader.readAsText(file);
    
    // Reset file input
    e.target.value = '';
}

// ============================================
// Utility Functions
// ============================================
function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
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

