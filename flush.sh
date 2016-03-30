sed -i '' 's/.aspx/.html/g' `grep '.aspx' -rl public/*`
sed -i '' 's/Images/images/g' `grep 'Images' -rl public/*`
sed -i '' 's/2479/pgn888/g' `grep '2479' -rl public/*`
sed -i '' 's/ShowIMG.html/images\/auth_code.jpeg/g' `grep 'ShowIMG' -rl public/*`
sed -i '' 's/\.\.\/Register.aspx/Register.html/g' `grep 'Register\.aspx' -rl public/*`
sed -i '' 's/<a href="javascript:;" onclick="ImgButtonOnclick()">/<a href="UsersMembers.html">/g' `grep 'ImgButtonOnclick' -rl public/*`
