function beginTest() {    
    $("#result").empty();
    $("#btn").text("Veriler Geliyor.Lütfen Bekleyiniz...");
    $("#btn").attr("disabled", true);

    var iterationCount = 3;

    var lockedMessages = [];
    var unlockedMessages = [];

    var func = function () {
        if (lockedMessages.length + unlockedMessages.length === (2 * iterationCount)) {
            for (var i = 0; i < iterationCount; i++) {
                $("#result").append(lockedMessages[i]);
            }
            for (var j = 0; j < iterationCount; j++) {
                $("#result").append(unlockedMessages[j]);
            }

            $("#btn").attr("disabled", false);
            $("#btn").text("Teste Başla");
        }
    }

    for (var i = 0; i < iterationCount; i++) {
        $.ajax({
            type: 'POST',
            url: '/MvcSessionLock/Locked/LockedMethod',
            contentType: "application/json",
            success: function (data) {
                lockedMessages.push('Locked ' + '<div>' + data + '</div>');    
                func();
            }
        });
    }

    for (var j = 0; j < iterationCount; j++) {
        $.ajax({
            type: 'POST',
            url: '/MvcSessionLock/UnLocked/UnLockedMethod',
            contentType: "application/json",
            success: function (data) {
                unlockedMessages.push('UnLocked ' + '<div>' + data + '</div>');                
                func();
            }
        });
    }    

}