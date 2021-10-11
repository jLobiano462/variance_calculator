const dataInput = document.getElementById('data-input')
const tableBod = document.querySelector('.table-body')
const originalConts = tableBod.innerHTML
const submit = document.getElementById('submit')
const ss = document.getElementById('ss')
const variance = document.getElementById('variance')
const sd = document.getElementById('sd')




submit.addEventListener('click',()=>{
  let dataSet = dataInput.value
  let intSet = []
  dataSet = dataSet.split(',')
  let isValid = checkValid(dataSet)

  if (dataInput.value === ''){
    alert('Please make sure to enter the dataset before clicking submit...')
  }else if(!isValid){
    alert('Check if every number in your dataset is separated by a comma or if you had entered an invalid integer.')
  }else{
    dataSet.forEach((item)=>{
      intSet.push(parseInt(item))
    })
    generateData(intSet)
  }




})



const checkValid = (arr)=>{
  let flag = 0

  arr.forEach((item)=>{
    if(isNaN(item)=== true || item === ''){
      flag ++
    }
  })


  let bool = flag === 0 ? true:false
  return bool
}


const generateData = (arr)=>{
  let stanDev;
  let varItem;
  let recs = []
  let deviation = 0
  let squaredDev =0
  let ssItem = 0
  tableBod.innerHTML = originalConts
  let mean = 0
  for(const data of arr){
    mean += data
  }
  mean = mean/arr.length
  mean = mean.toFixed(2)


  arr.forEach((i)=>{
    deviation = i - mean
    squaredDev = deviation * deviation
    let squaredDevStr = squaredDev.toFixed(2)
    recs.push(parseFloat(squaredDevStr))

    // let deviationStr = deviation.toFixed(2)




    tableBod.innerHTML +=
    `<tr>
        <td>${i}</td>
        <td>${mean}</td>
        <td>${deviation.toFixed(2)}</td>
        <td>${squaredDev.toFixed(2)}</td>
    </tr>
    `
  })
  for (const rec of recs){
    ssItem += rec
  }



  varItem = ssItem/arr.length
  stanDev = Math.sqrt(varItem)



  ss.textContent = 'SS=' + ssItem.toFixed(2)
  variance.textContent ='Variance=' + varItem.toFixed(2)
  sd.textContent = 'Standard deviation=' + stanDev.toFixed(2)
}
