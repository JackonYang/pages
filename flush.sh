sed -i '' 's/.aspx/.html/g' `grep '.aspx' -rl public/*`
sed -i '' 's/Images/images/g' `grep 'Images' -rl public/*`
sed -i '' 's/夺宝/宝石/g' `grep '夺宝' -rl public/*`
sed -i '' 's/360网站安全检测平台//g' `grep '360网站安全检测平台' -rl public/*`
sed -i '' 's/http:\/\/www.2479.com\/upload\/logo/images/g' `grep 'logo' -rl public/*`
sed -i '' 's/ShowIMG.html/images\/auth_code.jpeg/g' `grep 'ShowIMG' -rl public/*`
sed -i '' 's/\.\.\/Register.aspx/Register.html/g' `grep 'Register\.aspx' -rl public/*`
sed -i '' 's/<a href="javascript:;" onclick="ImgButtonOnclick()">/<a href="UsersMembers.html">/g' `grep 'ImgButtonOnclick' -rl public/*`
