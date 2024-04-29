<div id="plaintext-code-container">
    <textarea id="plaintext-code" rows="10" cols="50">Type or paste your plaintext code here...</textarea><br>
    <button onclick="copyPlaintextCode()">Copy</button>
    <button onclick="pastePlaintextCode()">Paste</button>
</div>

<script>
    function copyPlaintextCode() {
        var code = document.getElementById("plaintext-code");
        code.select();
        document.execCommand("copy");
        alert("Code copied to clipboard!");
    }

    function pastePlaintextCode() {
        var code = document.getElementById("plaintext-code");
        code.focus();
        document.execCommand("paste");
    }
</script>