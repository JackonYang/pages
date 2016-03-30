sed -i '' 's/.aspx/.html/g' `grep '.aspx' -rl public/*`
sed -i '' 's/Images/images/g' `grep 'Images' -rl public/*`
