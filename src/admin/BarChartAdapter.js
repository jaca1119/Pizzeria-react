
class BarChartAdapter {

    getDailyOrders (orders = []) {
        let dates = [];
            
        
        orders.forEach(order => {
            let dayMonthYear = this.getDayMonthYearFromDate(new Date(order.timestamp));

            let index = this.findDateIndex(dates, dayMonthYear);

            if (index !== -1) {
                dates[index].numberOfOrders += 1;
            }        
            else {
                dates.push({
                    date: dayMonthYear,
                    numberOfOrders: 1
                });
            }
        });

        return dates;
    }

    getDayMonthYearFromDate(date) {
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        return `${day}.${month}.${year}`;
    }

    findDateIndex(array = [], date) {
        let index = array.findIndex(row => row.date === date);

        return index;
    }
}

export default new BarChartAdapter();