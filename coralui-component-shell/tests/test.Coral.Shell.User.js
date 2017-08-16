describe('Coral.Shell.User', function() {
  'use strict';

  describe('Namespace', function() {
    it('should be defined in the Coral.Shell namespace', function() {
      expect(Coral.Shell).to.have.property('User');
      expect(Coral.Shell.User).to.have.property('Content');
      expect(Coral.Shell.User).to.have.property('Footer');
      expect(Coral.Shell.User).to.have.property('Heading');
      expect(Coral.Shell.User).to.have.property('Name');
      expect(Coral.Shell.User).to.have.property('Subheading');
    });
  });

  describe('Instantiation', function() {
    it('should be possible using new', function() {
      var user = helpers.build(new Coral.Shell.User());
      expect(user.classList.contains('coral3-Shell-user')).to.be.true;
    });

    it('should be possible using createElement', function() {
      var user = helpers.build(document.createElement('coral-shell-user'));
      expect(user.classList.contains('coral3-Shell-user')).to.be.true;
    });

    it('should be possible using markup', function() {
      const el = helpers.build('<coral-shell-user>');
      expect(el instanceof Coral.Shell.User).to.equal(true);
    });

    it('should be possible to clone using markup', function() {
      helpers.cloneComponent('<coral-shell-user>');
    });

    it('should be possible to clone using js', function() {
      helpers.cloneComponent(new Coral.Shell.User());
    });
  });
  
  describe('API', function() {
    
    describe('#avatar', function() {
      it('should default to avatar.DEFAULT', function() {
        var user = helpers.build(new Coral.Shell.User());
        expect(user.avatar).to.equal(Coral.Shell.User.avatar.DEFAULT);
        expect(user._elements.avatar.classList.contains('coral-Icon')).to.be.true;
        expect(user._elements.avatar.classList.contains('coral3-Shell-user-avatar')).to.be.true;
        expect(user._elements.avatar.classList.contains('coral-Icon--')).to.be.false;
        expect(user._elements.avatar.classList.contains('coral-Icon--null')).to.be.false;
        expect(user._elements.avatar.classList.contains('coral-Icon--undefined')).to.be.false;
      });
      
      it('should set the new avatar', function() {
        var user = helpers.build(new Coral.Shell.User());
        user.avatar = 'image.png';
        expect(user._elements.avatar.icon).to.equal('image.png');
      });
      
      it('should set the avatar back to default', function() {
        var user = helpers.build(new Coral.Shell.User());
        user.avatar = 'image.png';
  
        expect(user._elements.avatar.classList.contains('coral-Icon')).to.be.true;
        user.avatar = Coral.Shell.User.avatar.DEFAULT;
  
        expect(user.avatar).to.equal(Coral.Shell.User.avatar.DEFAULT);
        expect(user._elements.avatar.classList.contains('coral-Icon--')).to.be.false;
        expect(user._elements.avatar.classList.contains('coral-Icon--null')).to.be.false;
        expect(user._elements.avatar.classList.contains('coral-Icon--undefined')).to.be.false;
      });
      
      it('should set the avatar to empty string when the attribute is removed', function() {
        var user = helpers.build(new Coral.Shell.User());
        user.setAttribute('avatar', 'image.png');
        
        expect(user._elements.avatar.icon).to.equal('image.png');
        user.removeAttribute('avatar');
        
        expect(user.avatar).to.equal('');
      });
    });
  });

  describe('Markup', function() {

    describe('#avatar', function() {

      it('should be default value initially', function() {
        var user = helpers.build('<coral-shell-user></coral-shell-user>');
        expect(user.avatar).to.equal(Coral.Shell.User.avatar.DEFAULT);
        expect(user._elements.avatar.classList.contains('coral3-Shell-user-avatar')).to.be.true;
      });

      it('should set the new avatar', function() {
        var user = helpers.build('<coral-shell-user avatar="http://wwwimages.adobe.com/content/dam/Adobe/en/leaders/images/138x138/adobe-leaders-shantanu-narayen-138x138.jpg"></coral-shell-user>');
        expect(user.avatar).to.equal('http://wwwimages.adobe.com/content/dam/Adobe/en/leaders/images/138x138/adobe-leaders-shantanu-narayen-138x138.jpg');
        expect(user._elements.avatar.classList.contains('coral3-Shell-user-avatar')).to.be.true;
      });

      it('should allow empty avatar', function() {
        var user = helpers.build('<coral-shell-user avatar=""></coral-shell-user>');
        expect(user.avatar).to.equal('');
        expect(user.hasAttribute('avatar')).to.be.true;
        expect(user._elements.avatar.classList.contains('coral3-Shell-user-avatar')).to.be.true;
      });

      it('should support arbitrary relative URLs', function() {
        var user = helpers.build('<coral-shell-user avatar="image.png"></coral-shell-user>');
        expect(user.avatar).to.equal('image.png');
        expect(user._elements.avatar.icon).to.equal('image.png');
      });

      it('should support arbitrary relative URLs with paths', function() {
        var user = helpers.build('<coral-shell-user avatar="../image.png"></coral-shell-user>');
        expect(user.avatar).to.equal('../image.png');
        expect(user._elements.avatar.icon).to.equal('../image.png');
      });

      it('should support root relative URLs', function() {
        var user = helpers.build('<coral-shell-user avatar="/image.png"></coral-shell-user>');
        expect(user.avatar).to.equal('/image.png');
        expect(user._elements.avatar.icon).to.equal('/image.png');
      });

      it('should support arbitrary absolute URLs', function() {
        var user = helpers.build('<coral-shell-user avatar="http://localhost/image.png"></coral-shell-user>');
        expect(user.avatar).to.equal('http://localhost/image.png');
        expect(user._elements.avatar.icon).to.equal('http://localhost/image.png');
      });
    });
  });
});
