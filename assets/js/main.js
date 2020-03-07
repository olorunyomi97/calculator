$(document).on("click", ".number", function() {
    display_number($(this))
})

$(document).on("click", ".operator", function() {
    display_operator($(this))
})

function display_number(_param) {
    let keyboard_number = _param.attr("id");
    if (check_if_operator_exist()) { // we check if the operator has a value
        //operator has a value so number goes to second place
        let old_value = $("#history-value .second-number").html();
        let new_value = old_value + keyboard_number;

        $("#history-value .second-number").html(Number(new_value))
    } else {
        //operator doesn't have a value numbe rgoes to first place
        let old_value = $("#history-value .first-number").html();
        let new_value = old_value + keyboard_number;

        $("#history-value .first-number").html(Number(new_value))
    }

}

function display_operator(_operator) {
    let operator = _operator.attr("id");


    if (check_if_operator_exist()) {
        let first_number = $("#history-value .first-number").html();
        let existing_operator = $("#history-value .number-operator").html();
        let second_number = $("#history-value .second-number").html();

        let calc = calculate(first_number, existing_operator, second_number);

        $("#history-value .first-number").html(calc);
        $("#history-value .number-operator").html(operator);
        $("#history-value .second-number").html("");

    } else {
        $("#history-value .number-operator").html(operator)
    }



}

function calculate(first_number, operator, second_number) {
    var answer = eval(first_number + operator + second_number);
    console.log(answer)
    $("#output-value").html(answer)
    return answer;

}

function check_if_operator_exist() {
    if ($("#history-value .number-operator").html()) {
        return $("#history-value .number-operator").html(); //return operator if it exists
    } else {
        return false;
    }
}