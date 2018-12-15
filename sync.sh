#!/usr/bin/expect
spawn rsync -avz code/ -e ssh pi@192.168.84.1:ollie/
expect "password:"
send "raspberry\n"
expect eof
if [catch wait] {
    puts "rsync failed"
    exit 1
}
exit 0
