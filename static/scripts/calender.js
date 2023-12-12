class Year {
    constructor(year) {
        this.year = year;
    }

    isLeapYear() {
        return (this.year % 4 === 0 && this.year % 100 !== 0) || (this.year % 400 === 0);
    }
}

class Month {
    constructor(year, month) {
        this.year = new Year(year);
        this.month = month.toLowerCase();
    }

    getDaysInMonth() {
        switch (this.month) {
            case 'jan':
            case 'january':
            case 'mar':
            case 'march':
            case 'may':
            case 'jul':
            case 'july':
            case 'aug':
            case 'august':
            case 'oct':
            case 'october':
            case 'dec':
            case 'december':
                return 31;

            case 'apr':
            case 'april':
            case 'jun':
            case 'june':
            case 'sep':
            case 'september':
            case 'nov':
            case 'november':
                return 30;

            case 'feb':
            case 'february':
                return this.year.isLeapYear() ? 29 : 28;

            default:
                return -1; // Invalid month
        }
    }

    createCalendarForYear() {
        const yearCalendar = [];

        for (let i = 1; i <= 12; i++) {
            const monthName = new Date(this.year.year, i - 1, 1).toLocaleString('en-us', { month: 'short' });
            const daysInMonth = new Month(this.year.year, monthName).getDaysInMonth();

            if (daysInMonth === -1) {
                console.log(`%cInvalid month: ${monthName}`, 'color: red');
            } else {
                yearCalendar.push({ month: monthName, days: daysInMonth });
            }
        }

        return yearCalendar;
    }
}

// Example usage
const calendar = new Month(2024, 'Jan'); // Leap year
const yearCalendar = calendar.createCalendarForYear();

console.log('%cYear Calendar:', 'font-weight: bold; color: blue', yearCalendar);
