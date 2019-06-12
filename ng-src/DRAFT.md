  private test1(): void {
    const params1 = {
      anchor: {
        anchor_type: 'test1.',
        anchor_text: '1.'
      }
    };
    this.hcService.callZome(this.inst, this.zome, 'create_anchor', params1).subscribe(res1 => {
      this.log('create_anchor', res1);
      const params2 = { address: JSON.parse(res1).value };
      this.hcService.callZome(this.inst, this.zome, 'get_anchor', params2).subscribe(res2 => {
        this.log('get_anchor', res2);
      });
      this.hcService.callZome(this.inst, this.zome, 'anchor_exists', params1).subscribe(res2 => {
        this.log('anchor_exists', res2);
      });
      this.hcService.callZome(this.inst, this.zome, 'get_anchors', { anchor_type: params1.anchor.anchor_type }).subscribe(res2 => {
        this.log('get_anchors', res2);
      });
    });
  }