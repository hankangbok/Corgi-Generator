#!/bin/bash
echo "Configuring corgi stack db"
dropdb -U node_user corgistackdb
createdb -U node_user dragonstackdb

psql -U node_user corgistackdb < ./bin/sql/generation.sql
psql -U node_user corgistackdb < ./bin/sql/corgi.sql
echo "done Configuring corgi stack db"