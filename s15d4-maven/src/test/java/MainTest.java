import org.example.Main;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(ResultAnalyzer.class)
public class MainTest {

    @Test
    @DisplayName("Stack ile palindrom saayılar doğru bulunabiliyor mu ?")
    public void testPalindrome(){
        assertEquals(Main.checkForPalindrome("I did, did I?"), true);
        assertEquals(Main.checkForPalindrome("Racecar"), true);
        assertEquals(Main.checkForPalindrome("hello"), false);
        assertEquals(Main.checkForPalindrome("Was it a car or a cat I saw ?"), true);
        assertEquals(Main.checkForPalindrome("Test"), false);
        assertEquals(Main.checkForPalindrome("Welcome"), false);
    }

    @Test
    @DisplayName("convertToDecimal methodu 10 luk tabandaki sayıları 2 lik taban cevirebiliyor mu ?")
    public void testConvertToDecimal(){
        assertEquals(Main.convertDecimalToBinary(5), "101");
        assertEquals(Main.convertDecimalToBinary(6), "110");
        assertEquals(Main.convertDecimalToBinary(13), "1101");
    }

}
