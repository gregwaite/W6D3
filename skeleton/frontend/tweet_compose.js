class TweetCompose {
  newUserSelect() {
    const userOptions = window.users
      .map(user =>
        `<option value='${user.id}'>${user.username}</option>`)
      .join('');

    const html = `
        <div>
          <select name='tweet[mentioned_user_ids][]'>
            ${userOptions}
          </select>

          <button class='remove-mentioned-user'>Remove</button>
        </div>`;

    return $(html);
  }
}
module.exports = TweetCompose;