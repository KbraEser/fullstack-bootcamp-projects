import org.example.Main;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import static org.junit.jupiter.api.Assertions.assertEquals;

@ExtendWith(ResultAnalyzer.class)
public class MainTest {

    @Test
    @DisplayName("Queue ile palindrom saayılar doğru bulunabiliyor mu ?")
    public void testFIFOPalindrome(){
        assertEquals(Main.checkForPalindromeFIFO("I did, did I?"), true);
        assertEquals(Main.checkForPalindromeFIFO("Racecar"), true);
        assertEquals(Main.checkForPalindromeFIFO("hello"), false);
        assertEquals(Main.checkForPalindromeFIFO("Was it a car or a cat I saw ?"), true);
        assertEquals(Main.checkForPalindromeFIFO("Test"), false);
        assertEquals(Main.checkForPalindromeFIFO("Welcome"), false);
    }

    @Test
    @DisplayName("Stack ile palindrom saayılar doğru bulunabiliyor mu ?")
    public void testLIFOPalindrome(){
        assertEquals(Main.checkForPalindromeLIFO("I did, did I?"), true);
        assertEquals(Main.checkForPalindromeLIFO("Racecar"), true);
        assertEquals(Main.checkForPalindromeLIFO("hello"), false);
        assertEquals(Main.checkForPalindromeLIFO("Was it a car or a cat I saw ?"), true);
        assertEquals(Main.checkForPalindromeLIFO("Test"), false);
        assertEquals(Main.checkForPalindromeLIFO("Welcome"), false);
    }

    @Test
    @DisplayName("convertToDecimal methodu 10 luk tabandaki sayıları 2 lik taban cevirebiliyor mu ?")
    public void testConvertToDecimal(){
        assertEquals(Main.convertDecimalToBinary(5), "101");
        assertEquals(Main.convertDecimalToBinary(6), "110");
        assertEquals(Main.convertDecimalToBinary(13), "1101");
    }

}
