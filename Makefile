up:
	docker-compose up 

down: 
	docker-compose down

up-test:
	docker-compose -f docker-compose.yml -f docker-compose.test.yml up 