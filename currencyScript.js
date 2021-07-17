window.addEventListener("load", function () {
  setAvailCurrency();

  document
    .getElementById("currency")
    .addEventListener("change", currencyConversion2);
  document
    .getElementById("availCurrency")
    .addEventListener("change", currencyConversion);
  document
    .getElementById("inputValue")
    .addEventListener("change", currencyConversion);
});

// return the currency on hand
function selectCurrency() {
  let currSelectList = document.getElementById("currency");
  let currSelect = currSelectList.options[currSelectList.selectedIndex].value;
  return currSelect;
}

// return the currency to convert to
function select2ndCurrency() {
  let availCurrList = document.getElementById("availCurrency");
  let availCurrSelect =
    availCurrList.options[availCurrList.selectedIndex].value;
  return availCurrSelect;
}

//fill second drop menu
function setAvailCurrency() {
  let list1 = [
    "US Dollar",
    "UK Pound Sterling",
    "Japanese Yen",
    "Canadian Dollar",
  ];
  let list2 = ["Euro", "UK Pound Sterling", "Japanese Yen", "Canadian Dollar"];
  let list3 = ["Euro", "US Dollar", "Japanese Yen", "Canadian Dollar"];
  let list4 = ["Euro", "US Dollar", "UK Pound Sterling", "Canadian Dollar"];
  let list5 = ["Euro", "US Dollar", "UK Pound Sterling", "Japanese Yen"];

  let newList = document.getElementById("availCurrency");
  let i;

  // clear out second drop menu
  while (newList.length > 0) {
    newList.remove(0);
  }

  switch (selectCurrency()) {
    case "Euro":
      for (i = 0; i < list1.length; i++) {
        newList.options[newList.options.length] = new Option(list1[i]);
      }
      break;
    case "US Dollar":
      for (i = 0; i < list2.length; i++) {
        newList.options[newList.options.length] = new Option(list2[i]);
      }
      break;
    case "UK Pound Sterling":
      for (i = 0; i < list3.length; i++) {
        newList.options[newList.options.length] = new Option(list3[i]);
      }
      break;
    case "Japanese Yen":
      for (i = 0; i < list4.length; i++) {
        newList.options[newList.options.length] = new Option(list4[i]);
      }
      break;
    case "Canadian Dollar":
      for (i = 0; i < list5.length; i++) {
        newList.options[newList.options.length] = new Option(list5[i]);
      }
      break;
    default:
      window.alert("Invalid selection.");
  }
}

//determine conversion in the event of user changing currency on hand list when there is a value already in amount field
function currencyConversion2() {
  setAvailCurrency();

  if (document.getElementById("inputValue").value === "") {
    return false;
  }

  currencyConversion();
}

// convert amount to selected currency
function currencyConversion() {
  let currencyType = "";
  let conversionResult;
  let inputValue = parseFloat(document.getElementById("inputValue").value);

  switch (selectCurrency()) {
    case "Euro":
      conversionResult = inputValue * getEuroExchangeRate();
      currencyType = getExchangeType();
      break;
    case "US Dollar":
      conversionResult = inputValue * getUSExchangeRate();
      currencyType = getExchangeType();
      break;
    case "UK Pound Sterling":
      conversionResult = inputValue * getPoundExchangeRate();
      currencyType = getExchangeType();
      break;
    case "Japanese Yen":
      conversionResult = inputValue * getYenExchangeRate();
      currencyType = getExchangeType();
      break;
    case "Canadian Dollar":
      conversionResult = inputValue * getCanadianExchangeRate();
      currencyType = getExchangeType();
      break;
    default:
      window.alert("Invalid selection.");
  }

  let ratio = conversionResult / inputValue;

  let result =
    "" +
    conversionResult.toFixed(2) +
    " " +
    currencyType +
    " (" +
    ratio.toFixed(2) +
    ":1)";
  document.getElementById("resultField").value = result;
}

// determine exhchange currency type
function getExchangeType() {
  let type = "";

  switch (select2ndCurrency()) {
    case "Euro":
      type = "EUR";
      break;
    case "US Dollar":
      type = "USD";
      break;
    case "UK Pound Sterling":
      type = "GBP";
      break;
    case "Japanese Yen":
      type = "YEN";
      break;
    case "Canadian Dollar":
      type = "CAD";
      break;
    default:
      window.alert("Invalid selection.");
  }

  return type;
}

// determine euro to selected currency rate
function getEuroExchangeRate() {
  let rate = parseFloat(0);

  switch (select2ndCurrency()) {
    case "US Dollar":
      rate = 1.08;
      break;
    case "UK Pound Sterling":
      rate = 0.83;
      break;
    case "Japanese Yen":
      rate = 119.01;
      break;
    case "Canadian Dollar":
      rate = 1.44;
      break;
    default:
      window.alert("Invalid selection.");
  }

  return rate;
}

// determine us dollar to selected currency rate
function getUSExchangeRate() {
  let rate = parseFloat(0);

  switch (select2ndCurrency()) {
    case "Euro":
      rate = 1.08;
      break;
    case "UK Pound Sterling":
      rate = 0.83;
      break;
    case "Japanese Yen":
      rate = 119.01;
      break;
    case "Canadian Dollar":
      rate = 1.44;
      break;
    default:
      window.alert("Invalid selection.");
  }

  return rate;
}

// determine pound to selected currency rate
function getPoundExchangeRate() {
  let rate = parseFloat(0);

  switch (select2ndCurrency()) {
    case "Euro":
      rate = 1.2;
      break;
    case "US Dollar":
      rate = 1.3;
      break;
    case "Japanese Yen":
      rate = 143.33;
      break;
    case "Canadian Dollar":
      rate = 1.73;
      break;
    default:
      window.alert("Invalid selection.");
  }

  return rate;
}

// determine yen to selected currency rate
function getYenExchangeRate() {
  let rate = parseFloat(0);

  switch (select2ndCurrency()) {
    case "Euro":
      rate = 0.0084;
      break;
    case "US Dollar":
      rate = 0.0091;
      break;
    case "UK Pound Sterling":
      rate = 0.007;
      break;
    case "Canadian Dollar":
      rate = 0.012;
      break;
    default:
      window.alert("Invalid selection.");
  }

  return rate;
}

// determine canadian dollar to selected currency rate
function getCanadianExchangeRate() {
  let rate = parseFloat(0);

  switch (select2ndCurrency()) {
    case "Euro":
      rate = 0.7;
      break;
    case "US Dollar":
      rate = 0.75;
      break;
    case "Japanese Yen":
      rate = 82.86;
      break;
    case "UK Pound Sterling":
      rate = 0.58;
      break;
    default:
      window.alert("Invalid selection.");
  }

  return rate;
}
