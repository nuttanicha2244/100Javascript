// function getUser(id:string){}
// function getPost (id:string){}

// const userId = '123';

// getPost(userId);

type UserId = string & { _brand: 'UserId' };
type PostId = string & { _brand: 'PostId' };

function getUser(id: UserId) {}
function getPost(id: PostId) {}

function createUserId(id: string): UserId {
    return id as UserId;
}
const userId = createUserId('abc1234');
getUser(userId);