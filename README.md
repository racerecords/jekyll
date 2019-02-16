# RaceRecords front end

* This is the front end for the [RaceRecords](https://github.com/racerecords/RaceRecords) project. The front end is 
build with Jekyll. Currently using minima theme.[Theme preview](https://jekyll.github.io/minima/)

## Quick Start

* Clone the parent repo and run the jekyll.sh script in the dev-scripts folder.
  * This will start a jekyll server docker container with the source mounted as a host volume and the gems as a named volume so
  they do not have to be re-installed if the container is stopped. 
  
* Alternatively you can run jekyll server locally.


``` bash
export JEKYLL_VERSION=3.8
cmd='jekyll server 0.0.0.0'
docker run --name jekyll --rm -p 4000:4000 -v jekyll-gems:/usr/local/bundle  --volume="$PWD:/srv/jekyll" -it jekyll/jekyll:$JEKYLL_VERSION $cmd 
```
