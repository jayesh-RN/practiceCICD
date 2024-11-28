set -e
docker pull jayeshrn/practicecicd
docker run -d -p 3000:3000 jayeshrn/practicecicd
