function solution(id_pw, db) {
    var id = id_pw[0];
    var pw = id_pw[1];
    var login_list = db.filter((el) => el[0] === id)
    var pw_list = login_list.filter((el) => el[1] === pw)
    var answer = login_list.length === 0 ? 'fail' : pw_list.length === 0 ? 'wrong pw' : "login";
    return answer;
}