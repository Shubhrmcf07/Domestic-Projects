#include <iostream>
#include <vector>
#include <algorithm>
#include <set>

using namespace std;

int main(){
	int t;
	cin>>t;
	while(t--){
		long long int n;
		int i;
		int count = 0;
		cin>>n; int val;
		set<long long int> A;
		for(i=0;i<n;i++){
			cin>>val
			A.insert(val);
		}
		cout<<A.size()+1;

	}
}