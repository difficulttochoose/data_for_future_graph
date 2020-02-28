console.log("App was loaded...");
// let data =
var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
const month = 12;
for (let i = 0; i < month; i++) {
    axios
        .get(proxyUrl + `https://api.privatbank.ua/p24api/exchange_rates?json&date=01.${i + 1}.2019`)
        // .get(proxyUrl + 'https://api.privatbank.ua/p24api/exchange_rates')
        .then(res => {
            // const { pages } = res.data.exchangeRate;
            // console.log('exchangeRate', res.exchangeRate);
            let result=[];
            result.push(res.data);
            console.log('result', result);
            console.log(res);
            console.log(res.data);
            console.log(res.data.exchangeRate);
            console.log('currency', res.data.exchangeRate[1].currency);
            // Promise.all([...new Array(month)].map((el, i) => axios.get(`${proxyUrl} + https://api.privatbank.ua/p24api/exchange_rates?json&date=01.${i + 1}.2019`)))
            //     .then(res => {
            //         console.log('res2', res);
            //         console.log('res.length', res.length);
            //         let result = [];
            //         for (let i = 0; i < month; i++) {
            //             result.push(res.data);
            //         }
            //         console.log('result', result);
            // for (let i = 0; i < month; i++) {
            //     for (let j = 0; j < res[i].data.exchangeRate.length; j++) {
            //         result.push(res[i].data.[j]);
            //     }
            // }

            // const columns = {
            //     id: 'ID',
            //     name: 'Full Name',
            //     status: 'Status',
            //     species: 'Species',
            //     gender: 'Gender',
            // };

            // let tr = document.createElement('tr');

            // for (key in columns) {
            //     let th = document.createElement('th');
            //     th.innerHTML = columns[key];
            //     tr.appendChild(th);
            // }

            // let thead = document.createElement('thead');
            // thead.appendChild(tr);
            // let table = document.createElement('table');
            // table.appendChild(thead);

            // let tbody = document.createElement('tbody');

            // for (let i = 0; i < result.length; i++) {
            //     let tr2 = document.createElement('tr');
            //     for (key in columns) {
            //         if (Object.keys(result[i])[key] === Object.keys(columns)[key]) {
            //             let td = document.createElement('td');
            //             td.innerHTML = result[i][key];
            //             tr2.appendChild(td);
            //         }
            //     }
            //     tbody.appendChild(tr2);
            // }

            // table.appendChild(tbody);

            // let col = document.createElement('div');
            // col.setAttribute('class', 'col-12');
            // let row = document.createElement('div');
            // row.setAttribute('class', 'row');
            // let container = document.createElement('div');
            // container.setAttribute('class', 'container');

            // col.appendChild(table);
            // row.appendChild(col);
            // container.appendChild(row);

            // document.getElementById('app').appendChild(container);
            // })
        })
}
