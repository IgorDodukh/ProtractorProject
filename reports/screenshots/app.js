angular.module('reportingApp', [])
    .controller('ScreenshotReportController', function() {
        this.getParent = function(str) {
            var arr = str.split('|');
            str = "";
            for(var i=arr.length-1; i>0; i--) {
                str += arr[i] + " > ";
            }
            return str.slice(0, -3);
        };
        this.getShortDescription = function(str) {
            return str.split('|')[0];
        };
        this.nToBr = function(str) {
            return str.replace(/(?:\r\n|\r|\n)/g, '<br />');
        };
        this.getFilename = function(str) {
            return str.replace(/^.*[\\\/]/, '');
        };
        this.passCount = function() {
            var passCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.passed) passCount++;
            }
            return passCount;
        };
        this.pendingCount = function() {
            var pendingCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(result.pending) pendingCount++;
            }
            return pendingCount;
        };
        this.failCount = function() {
            var failCount = 0;
            for(var i in this.results) {
                var result = this.results[i];
                if(!result.passed && !result.pending) failCount++;
            }
            return failCount;
        };
        this.results =
[{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00230050-00ca-0038-0000-0053009b003f.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"0055007c-0066-0001-009a-006e00fe00df.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"0018003f-00c9-0027-0057-008800e6004b.png"},{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"0092009f-00b4-008f-0077-009800af0078.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"004f0049-00ec-00f7-0017-00e200cf0022.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"007500ae-0091-0094-0042-0030008500c8.png"},{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"0016005a-00eb-004e-00e9-007000f300db.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00dc00df-0094-00c0-00c8-003300f3003f.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Expected 'You clicked for 1 times' to contain '2'.","trace":"Error: Failed expectation\n  at UserContext.<anonymous> (C:\\Users\\ihord\\ProtractorTests\\letslearn\\letslearn-ci\\e2e\\approach-one\\tests\\testbuttons.e2e-spec.ts:25:44)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n  at new ManagedPromise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n  at ControlFlow.promise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n  at schedulerExecute (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n  at TaskQueue.execute_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n  at TaskQueue.executeNext_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n  at asyncRun (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n  at process._tickCallback (internal/process/next_tick.js:103:7)\n","screenShotFile":"0088006c-0012-0055-00d7-00c100cc002f.png"},{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00f50087-00e2-008c-00c8-008700c300f0.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"000a00a2-0057-00b6-00f9-00fa007a0050.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Expected 'You clicked for 1 times' to contain '2'.","trace":"Error: Failed expectation\n  at UserContext.<anonymous> (C:\\Users\\ihord\\ProtractorTests\\letslearn\\letslearn-ci\\e2e\\approach-one\\tests\\testbuttons.e2e-spec.ts:25:44)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n  at new ManagedPromise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n  at ControlFlow.promise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n  at schedulerExecute (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n  at TaskQueue.execute_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n  at TaskQueue.executeNext_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n  at asyncRun (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n  at process._tickCallback (internal/process/next_tick.js:103:7)\n","screenShotFile":"007400c2-00f5-0041-003a-00ed003e0073.png"},{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"006e0086-00b9-0037-00a0-0094004600fd.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00b200ce-00ef-00b9-002e-0022006d00be.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Expected 'You clicked for 1 times' to contain '2'.","trace":"Error: Failed expectation\n  at UserContext.<anonymous> (C:\\Users\\ihord\\ProtractorTests\\letslearn\\letslearn-ci\\e2e\\approach-one\\tests\\testbuttons.e2e-spec.ts:25:44)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n  at new ManagedPromise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n  at ControlFlow.promise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n  at schedulerExecute (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n  at TaskQueue.execute_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n  at TaskQueue.executeNext_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n  at asyncRun (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n  at process._tickCallback (internal/process/next_tick.js:103:7)\n","screenShotFile":"00010044-0093-00d0-0028-0083009a003e.png"},{"description":"should check the page title is correct|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00b3009f-00f2-0079-003a-005f003100b4.png"},{"description":"should increase number on \"Click Me\" button click|Test homepage content","passed":true,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Passed.","trace":"","screenShotFile":"00190058-0026-0048-0093-008d00fe005e.png"},{"description":"should decrease number on \"Unclick Me\" button click|Test homepage content","passed":false,"pending":false,"os":"Windows NT","browser":{"name":"chrome","version":"60.0.3112.90"},"message":"Expected 'You clicked for 1 times' to contain '2'.","trace":"Error: Failed expectation\n  at UserContext.<anonymous> (C:\\Users\\ihord\\ProtractorTests\\letslearn\\letslearn-ci\\e2e\\approach-one\\tests\\buttons-test.e2e-spec.ts:25:44)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:112:25\n  at new ManagedPromise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:1067:7)\n  at ControlFlow.promise (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2396:12)\n  at schedulerExecute (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\jasminewd2\\index.js:95:18)\n  at TaskQueue.execute_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2970:14)\n  at TaskQueue.executeNext_ (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2953:27)\n  at asyncRun (C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:2813:27)\n  at C:\\Users\\ihord\\AppData\\Roaming\\npm\\node_modules\\protractor\\node_modules\\selenium-webdriver\\lib\\promise.js:676:7\n  at process._tickCallback (internal/process/next_tick.js:103:7)\n","screenShotFile":"00670053-00a4-00a0-00b7-00f800190007.png"}];
    });