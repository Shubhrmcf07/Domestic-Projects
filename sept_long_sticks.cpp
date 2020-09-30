#include <bits/stdc++.h>

using namespace std;

int main(){
	ios_base::sync_with_stdio(false);
	cin.tie(NULL); cout.tie(NULL);
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
