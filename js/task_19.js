    function alternatingCharacters(s) {
        var count = 0;
        var count1 = 0;
        var A = "A";
        var B = "B";
        var result;
        
        for(var i = 0; i <s.length - 1; i++){
            if(s[i] == "A" && s[i] == s[i+1]) {
                count++;
            }
            else if (s[i] == "B" && s[i] == s[i + 1]  )    {
                count1++;
            }
        }
        result = count + count1;
        return result;
        
        
    }







    














