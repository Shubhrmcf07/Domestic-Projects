/* Problem Statement

An English text needs to be encrypted using the following encryption scheme.
First, the spaces are removed from the text. Let  be the length of this text.
Then, characters are written into a grid, whose rows and columns have the following constraints:

floor(L^(1/2))<=rows<=columns<= ceil(L^(1/2))
For example, the sentence , after removing spaces is 54 characters long. 54^(1/2) is between 7 & 8 and , so it is written in the form of a grid with 7 rows and 8 columns.

Ensure that rows*columns >=L
If multiple grids satisfy the above conditions, choose the one with the minimum area, i.e. .
The encoded message is obtained by displaying the characters in a column, inserting a space, and then displaying the next column and inserting a space, and so on. For example, the encoded message for the above rectangle is:

imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau

You will be given a message to encode and print.

Function Description

Complete the encryption function in the editor below. It should return a single string composed as described.

encryption has the following parameter(s):

s: a string to encrypt
Input Format

One line of text, the string 

*/


#include <bits/stdc++.h>

using namespace std;

// Complete the encryption function below.
string encryption(string s) {
    int l=s.length();
    int r=floor(sqrt(l));
    int c=ceil(sqrt(l));
    if(r*c<l)r++;
    string res="";
    for(int i=0;i<c;i++)
    {
        for(int j=i;j<l;j+=c)
        {
            res+=s[j];
        }
        res+=" ";
    }
    return res;


}

int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = encryption(s);

    fout << result << "\n";

    fout.close();

    return 0;
}
