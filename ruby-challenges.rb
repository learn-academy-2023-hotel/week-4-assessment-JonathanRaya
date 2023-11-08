# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Create a method named odd-or-even that takes a number as a variable
# make a conditional statment in the method that checks if the arguement has a remainder after being divided by 2
#  if there is no remainder return the number is even If there is a remainder return the number is odd.

def even_or_odd (number)
    if number % 2 == 0
        "#{number} is even"
    else
        "#{number} is odd"
    end
end
p even_or_odd(reposts1)
p even_or_odd(reposts2)
p even_or_odd(reposts3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Create a method named no_vowels
# make the method return the expected outcome from the provided varaiibles without any vowles

def no_vowels (string)
    string.downcase.delete "aeiou"
end
p no_vowels(beatles_album1)
p no_vowels(beatles_album2)
p no_vowels(beatles_album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Create a method named palindrome_checker that will take a string holding a word as an arguement
# Make a conditional statment to check if the word is a palindrome by comparing it to itself in all lowercase.
# Output whether the arguement is a palindrome or not

def palindrome_checker (string)
    if string.reverse.downcase == string.downcase
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end
end
p palindrome_checker(palindrome_test_case1)
p palindrome_checker(palindrome_test_case2)
p palindrome_checker(palindrome_test_case3)