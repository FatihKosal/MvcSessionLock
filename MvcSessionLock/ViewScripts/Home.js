function beginTest() {
    $("#result").empty();
    $("#btn").text("Veriler Geliyor.Lütfen Bekleyiniz...");
    $("#btn").attr("disabled", true);
    var iterationCount = 3;
    var lockedMessages = [];
    var unlockedMessages = [];
    var func = function () {
        if (lockedMessages.length + unlockedMessages.length === (2 * iterationCount)) {
            $("#result").append("<b>Locked</b>");
            for (var i = 0; i < iterationCount; i++) {
                $("#result").append(lockedMessages[i]);
            }
            $("#result").append("<b>UnLocked</b>");
            for (var j = 0; j < iterationCount; j++) {
                $("#result").append(unlockedMessages[j]);
            }

            $("#btn").attr("disabled", false);
            $("#btn").text("Teste Başla");
        }
    }
    for (var i = 0; i < iterationCount; i++) {
        var beginTime = new Date().getTime();
        $.ajax({
            type: 'POST',
            url: '/MvcSessionLock/Locked/LockedMethod',
            contentType: "application/json",
            success: function (data) {
                var endTime = new Date().getTime();
                lockedMessages.push('<div>' + (endTime - beginTime) + ' ms</div>');
                func();
            }
        });
    }
    for (var j = 0; j < iterationCount; j++) {
        var beginTime = new Date().getTime();
        $.ajax({
            type: 'POST',
            url: '/MvcSessionLock/UnLocked/UnLockedMethod',
            contentType: "application/json",
            success: function (data) {
                var endTime = new Date().getTime();
                unlockedMessages.push('<div>' + (endTime - beginTime) + ' ms</div>');
                func();
            }
        });
    }
}