// 条件分岐を使ってボタンが押されたら各計算を実行・表示する関数

function calculation(btn) {
    var resultField = document.calculator.result;
    // =　が押されたら計算できるevalメソッドを使用  // AC が押されたら初期化する
    if (btn.value == '=') {
        try {
            var result = eval(resultField.value);
            if (result === Infinity || isNaN(result)) {
                resultField.value = 'エラー';
            } else {
                resultField.value = result;
            }
        } catch (error) {
            resultField.value = 'エラー';
        }

    } else if (btn.value == 'AC') {
        resultField.value = "";
    } else {
        if (btn.value == '×') {
            resultField.value += '*';
        } else if (btn.value == '÷') {
            resultField.value += '/';
        } else {
            resultField.value += btn.value;
        }
    }
}


// 符号を反転させる関数 parseFloatは文字列を数値に変換することができる組み込み関数
function reverse() {
    var resultField = document.calculator.result;
    if (resultField.value !== '') {
        var C_value = parseFloat(resultField.value);

        if (!isNaN(C_value)) {
            resultField.value = C_value * -1;
        }
    }
}

// 百分率に変換する関数
function percentage() {
    var resultField = document.calculator.result;
    if (resultField.value != '') {
        var C_value = parseFloat(resultField.value);
        if (!isNaN(C_value)) {
            resultField.value = C_value / 100;
        }
    }
}

