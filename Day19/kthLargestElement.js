// JavaScript code to implement the approach

// Function to find the kth smallest array element
function kthSmallest(arr, N, K) {

	// For finding min element we need (Max heap)priority
	// queue
	const pq = [];

	for (let i = 0; i < K; i++) {
		// First push first K elements into heap
		pq.push(arr[i]);
	}
	// Now check from k to last element
	for (let i = K; i < N; i++) {

		// If current element is < top that means
		// there are other k-1 lesser elements
		// are present at bottom thus, pop that element
		// and add kth largest element into the heap till
		// curr at last all the greater element than kth
		// element will get pop off and at the top of heap
		// there will be kth smallest element
		if (arr[i] < pq[0]) {
			pq.shift();
			// Push curr element
			pq.push(arr[i]);
			pq.sort((a, b) => b - a);
		}
	}

	// Return top of element
	return pq[0];
}

// Driver's code:
const N = 10;
const arr = [10, 5, 4, 3, 48, 6, 2, 33, 53, 10];
const K = 4;

// Function call
console.log(kthSmallest(arr, N, K));

