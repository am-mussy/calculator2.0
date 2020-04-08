let calk = {
    insert: function (num) {
        document.form.textview.value += num;
    },

    clean: function () {
        document.form.textview.value = '';
    },

    back: function () {
        let exp = document.form.textview.value;
        document.form.textview.value = exp.substring(0, exp.length - 1);
    },

    equl: function () {
        let exp = document.form.textview.value;

        if (exp) {
            document.form.textview.value = eval(exp);
            let element = document.getElementById("equl");
        }

    }

}

