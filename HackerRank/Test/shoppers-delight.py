def shoppingOptions(pants, shirts, shoes, skirts, budget):
    # Write your code here.
	
	pantsShirts = []
	shoesSkirts = []
	
	for i in pants:
		for j in shirts:
			pantsShirts.append(i + j)
	
	for i in shoes:
		for j in skirts:
			shoesSkirts.append(i + j)
	
	pantsShirts.sort()
	shoesSkirts.sort(reverse=True)
	
	limit = 0
	combinations = 0
	
	for i in range(0, pantsShirts):
		for j in range(limit, shoesSkirts):
			budgetSum = pantsShirts[i] + shoesSkirts[j]
			if budgetSum <= budget:
				combinations += len(shoesSkirts) - j
				limit = j
				break
	
	return combinations