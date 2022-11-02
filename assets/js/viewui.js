const ViewUIStr = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="./../assets/viewui/styles/iview.css" rel="stylesheet" />
    <title>ViewUI-示例</title>
</head>

<body>
    <div id="minto">
        <i-button @click="show">Click me!</i-button>
        <Modal v-model="visible" title="Welcome">Welcome to ViewUI</Modal>
    </div>
    <script type="text/javascript" src="./../assets/js/vue.min.js"></script>
    <script type="text/javascript" src="./../assets/viewui/iview.js"></script>
    <script type="text/javascript">

        new Vue({
            el: "#minto",
            data: {
                visible: false
            },
            methods: {
                show: function () {
                    this.visible = true;
                }
            }
        });
    </script>   
</body>

</html>
`;