{
	/*
	studyID: 'WCDT'
	batchesProcessed: [1,2,3,4,5,6]
	batchesUnprocessed: [7]
	cohortMaker: ['']
	
	
	
	OnBatchFASTQAdded(fastq):
		transfer data to cluster server
		runMapSplicedRSEM pipeline
			create new cohort by concat processed batches with new batch
		fire off robot on to rerun list of analysis results 
	
	RobotRerun(cohort):
		find all resultSets that were run on a cohort(n-1)
		for each published Dataset:
		 	run TaskSet on new cohort
		
	TaskSet:
		for each task:
			pull input from gridfs
			run adapter
			if errors, 
				mail user
			else,
				transform data to tool dependent format
				generate paramSet
				run tool
				check for errors
				if errors, email user
				transform output to medbook format
				store in grid fs
				store in mongo collection (optional)
				update resultSet/result object
	*/
}