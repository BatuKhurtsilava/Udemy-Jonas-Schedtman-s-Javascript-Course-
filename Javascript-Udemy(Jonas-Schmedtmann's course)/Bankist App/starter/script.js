'use strict';


const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2023-06-18T21:31:17.178Z",
    "2023-06-23T07:42:02.383Z",
    "2023-06-28T09:15:04.904Z",
    "2023-06-01T10:17:24.185Z",
    "2023-06-08T14:11:59.604Z",
    "2023-06-26T17:01:17.194Z",
    "2023-07-19T23:36:17.929Z",
    "2023-07-20T10:51:36.790Z",
  ],


};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],

};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const setUserNames = accounts.map(acc => {
  const abreviature = acc.owner.split(' ').map(nm => {
    let initial = '';
    nm = nm.slice(0,1).toLowerCase();
    initial = initial + nm;
    return initial;
  }).join('')
  acc.userName = abreviature;
});

console.log(accounts);

let foundAccount;
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
 foundAccount = accounts.find(acc => 
    inputLoginUsername.value === acc.userName && Number(inputLoginPin.value) === acc.pin);
  console.log(foundAccount);
  if(foundAccount) {
    labelWelcome.innerText = `Welcome back, ${foundAccount.owner.slice(0,foundAccount.owner.indexOf(" "))}`
    containerApp.style.opacity = 1;
    updatePage();
    
    
   
  }
    
      
    }); 
  
  const displayMovements = function(acc, sorted = false) {
    containerMovements.innerHTML = '';
  const movements = sorted ?  acc.movements.slice().sort((a,b) => a - b) : acc.movements;
    movements.forEach((mov,i) => 
    {
      const type =  mov < 0  ? 'withdrawal' : 'deposit';
        const html = `
        <div class="movements__row">
        <div class="movements__type movements__type--${type}">
          ${i + 1} ${type}
        </div>
        <div class="movements__date">${formatDateMovements(acc.movementsDates[i])}</div>
        <div class="movements__value">${mov}</div>
        
      </div>`
      containerMovements.insertAdjacentHTML("afterbegin",html);
      })
    };
   
  
    

    const calcDisplayBalance = function(user) {
    return labelBalance.innerText =  user.movements.reduce((acc,mov) => 
        acc += mov
      , 0) + '€';
    };

    const calcDisplaySummary = function(user) {
    labelSumIn.innerText =  user.movements.filter(mov => mov > 0).reduce((acc,mov) => acc += mov, 0) + '€';
    labelSumOut.innerText =  user.movements.filter(mov => mov < 0).reduce((acc,mov) => acc += mov, 0) + '€';
    labelSumInterest.innerText = (Number(labelSumIn.innerText.slice(0,-1)) * user.interestRate) / 100 + '€';
    }

    const updatePage = function() {
      inputLoginPin.value = '';
      inputLoginUsername.value = '';
      inputLoginPin.blur();
      displayMovements(foundAccount);
      calcDisplayBalance(foundAccount);
      calcDisplaySummary(foundAccount);
      labelDate.innerText = `${formatDate(new Date())}`;
      logoutTimer(foundAccount);
    }
 

    let sorted = false;
    btnSort.addEventListener('click', function(e) {
      e.preventDefault;
      displayMovements(foundAccount,!sorted);
      sorted = !sorted
    });

    const transferMoney = function(user) {
     const recieverAcc =  accounts.find(acc => acc.userName === inputTransferTo.value);
      const balance = user.movements.reduce((acc,mov) => 
      acc += mov
    , 0);
    if(balance > Number(inputTransferAmount.value) && recieverAcc && recieverAcc !== user){
      user.movementsDates.push(new Date());
      recieverAcc.movementsDates.push(new Date());
      user.movements.push(-Number(inputTransferAmount.value));
      recieverAcc.movements.push(Number(inputTransferAmount.value));
      updatePage(user);
      updatePage(recieverAcc);
      

     
    }
    }


    btnTransfer.addEventListener('click', function(e){
      e.preventDefault();
      foundAccount.movementsDates.push(new Date());
      transferMoney(foundAccount);
      inputTransferAmount.value = '';
      inputTransferTo.value = '';
    });

    btnLoan.addEventListener('click', function(e) {
      e.preventDefault();
      if(Number(inputLoanAmount.value) > 0 && foundAccount.movements.some(mov => Number(inputLoanAmount.value) * 0.1 < mov )){
        foundAccount.movementsDates.push(new Date());
        foundAccount.movements.push(Number(inputLoanAmount.value));
        updatePage(foundAccount);
        inputLoanAmount.value = '';
        
      }
    });

   btnClose.addEventListener('click', function() {
    e.preventDefault();
    if(inputCloseUsername.value === foundAccount.userName && Number(inputClosePin.value) === foundAccount.pin) {
     const index = accounts.findIndex(acc => acc.userName === foundAccount.userName);
     if(index !== -1) {
     accounts.splice(index,1);
     containerApp.style.opacity = 0;
     inputClosePin.value = '';
     inputCloseUsername.value = '';
     };
    }
   });

   function formatDate(date) {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${day},${month},${year}, ${hours}:${minutes}`;
  }

  const formatDateMovements = function(date) {
   const date1 = new Date(date);
   const date2 = new Date();
   const daysPassed = Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));
   if(daysPassed === 0) return 'Today';
   if(daysPassed === 1) return 'Yesterday';
   if(daysPassed > 1  && daysPassed < 7 ) return `${daysPassed} days ago`;
   if(daysPassed > 7 ) return `${formatDate(date1)}`;
  }

  let intervalId;
  const logoutTimer = function(user) {
    let min = 1;
    let sec = 59;

    clearInterval(intervalId);
    intervalId = setInterval(() => {
      sec -= 1;
  
      if (sec < 0) {
        min -= 1;
        sec = 59;
      }
  
      labelTimer.innerText = `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  
      if (min === 0 && sec === 0) {
        clearInterval(intervalId); 
        labelWelcome.innerText = 'Log in to get started';
        containerApp.style.opacity = 0;
      }
    }, 1000);
  };


  
const saveMovementsToLocalStorage = function() {
  localStorage.setItem('movements', JSON.stringify(accounts));
};

const loadMovementsFromLocalStorage = function() {
  const movementsData = localStorage.getItem('movements');
  return movementsData ? JSON.parse(movementsData) : null;
};

const storedMovements = loadMovementsFromLocalStorage();
if (storedMovements) {
  accounts = storedMovements;
}

window.addEventListener('beforeunload', saveMovementsToLocalStorage);