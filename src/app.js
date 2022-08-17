const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')
const data = document.getElementById('data')
const getPage = data.getAttribute('data-page')
const pageNo = document.getElementById('page-info')

function fetchData(index) {
  fetch(
    'https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=' + index
  )
    .then((response) => response.json())
    .then((json) => {
      const holdData = json.results[0][index]

      // create table row and input table data from json data collected from randomapi.com
      data.innerHTML = ''
      for (let h = 0; h < holdData.length; h++) {
        data.innerHTML +=
          '<tr>' +
          '<td>' +
          holdData[h].row +
          '</td>' +
          '<td>' +
          holdData[h].gender +
          '</td>' +
          '<td>' +
          holdData[h].age +
          '</td>' +
          '</tr>'
        // console.log(holdData[h].age);
      }

      //set page attribut to current page number
      data.setAttribute('data-page', index)
      pageNo.innerHTML = index
    })
}
fetchData(getPage)
