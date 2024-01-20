import { strict as assert } from 'node:assert';

describe('test', function() {
	function _clean_global_scope() {
		delete globalThis._foo
	}
	before(_clean_global_scope)
	afterEach(_clean_global_scope)

	it('should set the global variable', () => {
		globalThis._foo = 33
		assert(globalThis._foo = 33)

		//_clean_global_scope() // if we uncomment this line, the test pass 🤒
		                        // BUT we shouldn't need to since we have afterEach()
	})
})
