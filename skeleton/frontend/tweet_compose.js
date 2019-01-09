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

  clearInput() {
    this.$input.val('');
    this.$mentionedUsersDiv.find('ul').empty();
    this.$el.find(':input').prop('disabled', false);
    this.$el.find('.char-left').empty();
  }

  handleInput(event) {
    const inputLength = this.$input.val().length;

    this.$el.find('.char-left').text(`${140 - inputLength} characters left`);
  }

  handleSuccess(data) {
    const $tweetsUl = $(this.$el.data('tweets-ul'));
    $tweetsUl.trigger('insert-tweet', data);

    this.clearInput();
  }
}
module.exports = TweetCompose;